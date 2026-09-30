import type { Locale } from './types';

/** Production origin. Preview hosts should still advertise the canonical site. */
export const SITE_ORIGIN = 'https://www.ra2web.com';

/** Only accept a path the proxy copied from the request URL. */
export function safePathname(pathname: string | null | undefined): string {
  if (!pathname || !pathname.startsWith('/') || pathname.startsWith('//')) return '/';
  if (/[?#\\]/.test(pathname)) return '/';
  return pathname;
}

export function localeAlternates(pathname: string, locale: Locale): {
  canonical: string;
  languages: Record<string, string>;
} {
  const path = safePathname(pathname);
  const zh = new URL(path, SITE_ORIGIN).toString();
  const en = new URL(path, SITE_ORIGIN);
  en.searchParams.set('lang', 'en');
  return {
    canonical: locale === 'en' ? en.toString() : zh,
    languages: {
      'zh-CN': zh,
      en: en.toString(),
      'x-default': zh,
    },
  };
}
