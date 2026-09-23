import { isLocale, LOCALE_COOKIE, LOCALE_MAX_AGE, type Locale } from './types';

export function readLocaleCookie(): Locale | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=(zh|en)(?:;|$)`));
  return isLocale(match?.[1]) ? match[1] : null;
}

export function writeLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${LOCALE_MAX_AGE}; SameSite=Lax`;
  try {
    localStorage.setItem(LOCALE_COOKIE, locale);
  } catch {
    // Persistence still works via the cookie when storage is blocked.
  }
}

export function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(LOCALE_COOKIE);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

/**
 * Runs before paint. If a saved override exists only in localStorage, copy it
 * into the cookie and reload so SSR matches. Does not invent an override from
 * navigator.languages — that signal is already sent as Accept-Language.
 */
export const LOCALE_BOOTSTRAP = `(function(){try{var k='${LOCALE_COOKIE}';var m=document.cookie.match(/(?:^|; )${LOCALE_COOKIE}=(zh|en)(?:;|$)/);if(m){try{localStorage.setItem(k,m[1]);}catch(e){}return;}var s=localStorage.getItem(k);if(s==='zh'||s==='en'){document.cookie=k+'='+s+'; Path=/; Max-Age=${LOCALE_MAX_AGE}; SameSite=Lax';var lang=(document.documentElement.getAttribute('lang')||'').toLowerCase();var cur=lang.indexOf('zh')===0?'zh':'en';if(s!==cur)location.replace(location.href);}}catch(e){}})();`;
