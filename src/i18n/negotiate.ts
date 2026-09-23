import type { Locale } from './types';

type RankedTag = { tag: string; q: number };

function parseAcceptLanguage(header: string): RankedTag[] {
  return header
    .split(',')
    .map((part) => {
      const [rawTag, ...params] = part.trim().split(';');
      let q = 1;
      for (const param of params) {
        const [key, value] = param.trim().split('=');
        if (key === 'q') {
          const parsed = Number(value);
          q = Number.isFinite(parsed) ? parsed : 0;
        }
      }
      return { tag: rawTag.trim().toLowerCase(), q };
    })
    .filter((item) => item.tag && item.tag !== '*')
    .sort((a, b) => b.q - a.q);
}

/** Map ordered language tags (navigator.languages or a sorted Accept-Language list). */
export function negotiateLocaleFromTags(tags: Iterable<string> | null | undefined): Locale {
  if (!tags) return 'en';
  for (const raw of tags) {
    const tag = raw.trim().toLowerCase();
    if (!tag || tag === '*') continue;
    if (tag === 'zh' || tag.startsWith('zh-')) return 'zh';
    if (tag === 'en' || tag.startsWith('en-')) return 'en';
  }
  return 'en';
}

/** Prefer zh* when it ranks first among languages this site supports; otherwise English. */
export function negotiateLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage?.trim()) return 'en';
  return negotiateLocaleFromTags(parseAcceptLanguage(acceptLanguage).map((item) => item.tag));
}
