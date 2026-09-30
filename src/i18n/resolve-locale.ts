import { negotiateLocale } from './negotiate';
import { isLocale, type Locale } from './types';

/**
 * Search-engine crawlers that should receive the Chinese document unless a
 * visitor explicitly selected a locale (cookie or `?lang=`).
 * Googlebot and Baiduspider usually omit Accept-Language; matching the UA
 * also covers the cases where they send `en`.
 */
const CRAWLER_UA =
  /(?:googlebot|adsbot-google|mediapartners-google|storebot-google|google-inspectiontool|bingbot|baiduspider|yandexbot|duckduckbot|slurp|sogou|360spider|bytespider|petalbot|applebot)/i;

export function isCrawlerUserAgent(userAgent: string | null | undefined): boolean {
  if (!userAgent) return false;
  return CRAWLER_UA.test(userAgent);
}

export type LocaleSignals = {
  /** `ra2web_locale` cookie. Manual switch, remembered across visits. */
  cookie?: string | null;
  /** `lang` query (`en` or `zh`) from the explicit English/Chinese URL. */
  langQuery?: string | null;
  acceptLanguage?: string | null;
  userAgent?: string | null;
};

/**
 * Locale for SSR (HTML lang, copy, and metadata).
 * 1. Remembered manual choice (cookie) wins, same as before.
 * 2. `?lang=en|zh` selects that version when there is no cookie, so hreflang
 *    targets and shared links render the matching document.
 * 3. Known crawlers get Chinese. They are not a user language preference.
 * 4. Otherwise negotiate Accept-Language. No header defaults to Chinese;
 *    zh* is Chinese; English and other tags stay English.
 */
export function resolveLocale(signals: LocaleSignals): Locale {
  if (isLocale(signals.cookie)) return signals.cookie;
  if (isLocale(signals.langQuery)) return signals.langQuery;
  if (isCrawlerUserAgent(signals.userAgent)) return 'zh';
  return negotiateLocale(signals.acceptLanguage);
}
