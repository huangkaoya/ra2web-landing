import type { Locale } from './types';

export function intlLocale(locale: Locale): string {
  return locale === 'zh' ? 'zh-CN' : 'en-US';
}

export function htmlLang(locale: Locale): string {
  return locale === 'zh' ? 'zh-CN' : 'en';
}

export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    vars[key] === undefined ? '' : String(vars[key])
  );
}

export function formatDate(iso: string, locale: Locale, withTime = false): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const tag = intlLocale(locale);
  return withTime ? date.toLocaleString(tag) : date.toLocaleDateString(tag);
}

/** Visible product name. Case variants of the brand collapse to the exact trademark. */
export function displayBrand(value: string | null | undefined, fallback = 'ra2web'): string {
  const trimmed = value?.trim();
  if (!trimmed) return fallback;
  if (/^ra2web$/i.test(trimmed)) return 'ra2web';
  return trimmed;
}
