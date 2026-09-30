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

/**
 * Map ordered language tags (a sorted Accept-Language list).
 * zh* → Chinese, en* → English. Unsupported tags fall through to English,
 * which is the existing browser default when the visitor named some other language.
 */
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

/**
 * Negotiate a locale from Accept-Language.
 * No header, an empty header, or only `*` is "no preference" and defaults to
 * Chinese, so crawlers and bare requests index the Chinese page.
 */
export function negotiateLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage?.trim()) return 'zh';
  const tags = parseAcceptLanguage(acceptLanguage);
  if (tags.length === 0) return 'zh';
  return negotiateLocaleFromTags(tags.map((item) => item.tag));
}
