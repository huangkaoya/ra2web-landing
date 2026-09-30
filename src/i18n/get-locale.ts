import { cache } from 'react';
import { cookies, headers } from 'next/headers';
import { getMessages } from './messages';
import { resolveLocale } from './resolve-locale';
import { safePathname } from './seo';
import { LOCALE_COOKIE, type Locale, type Messages } from './types';

/**
 * Locale resolution for SSR:
 * 1. `ra2web_locale` cookie (manual override) wins.
 * 2. `?lang=en|zh` selects that version when the visitor has not chosen yet.
 * 3. Known crawlers get Chinese.
 * 4. Otherwise negotiate Accept-Language. zh* maps to Chinese; a named English
 *    (or other) tag maps to English. A missing header maps to Chinese.
 */
export const getLocaleContext = cache(async (): Promise<{ locale: Locale; pathname: string }> => {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const locale = resolveLocale({
    cookie: cookieStore.get(LOCALE_COOKIE)?.value,
    langQuery: headerStore.get('x-ra2web-lang'),
    acceptLanguage: headerStore.get('accept-language'),
    userAgent: headerStore.get('user-agent'),
  });
  return {
    locale,
    pathname: safePathname(headerStore.get('x-ra2web-pathname')),
  };
});

export async function getLocale(): Promise<Locale> {
  return (await getLocaleContext()).locale;
}

export async function getI18n(): Promise<{ locale: Locale; m: Messages }> {
  const locale = await getLocale();
  return { locale, m: getMessages(locale) };
}
