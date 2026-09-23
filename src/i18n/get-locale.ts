import { cookies, headers } from 'next/headers';
import { negotiateLocale } from './negotiate';
import { getMessages } from './messages';
import { isLocale, LOCALE_COOKIE, type Locale, type Messages } from './types';

/**
 * Locale resolution for SSR:
 * 1. `ra2web_locale` cookie (manual override) wins.
 * 2. Otherwise negotiate Accept-Language. Browsers send that header from
 *    navigator.languages. zh* maps to Chinese; anything else supported, or an
 *    empty header, maps to English.
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const forced = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(forced)) return forced;
  return negotiateLocale(headerStore.get('accept-language'));
}

export async function getI18n(): Promise<{ locale: Locale; m: Messages }> {
  const locale = await getLocale();
  return { locale, m: getMessages(locale) };
}
