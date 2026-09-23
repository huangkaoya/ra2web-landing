import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { negotiateLocale } from '@/i18n/negotiate';
import { htmlLang } from '@/i18n/format';
import { isLocale, LOCALE_COOKIE, type Locale } from '@/i18n/types';

function resolveLocale(request: NextRequest): Locale {
  const forced = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(forced)) return forced;
  return negotiateLocale(request.headers.get('accept-language'));
}

export function proxy(request: NextRequest) {
  const locale = resolveLocale(request);
  const response = NextResponse.next();
  response.headers.set('Content-Language', htmlLang(locale));
  response.headers.set('Vary', 'Accept-Language, Cookie');
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|img/|api/).*)'],
};
