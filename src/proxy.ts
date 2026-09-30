import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { htmlLang } from '@/i18n/format';
import { resolveLocale } from '@/i18n/resolve-locale';
import { LOCALE_COOKIE } from '@/i18n/types';

const LANG_HEADER = 'x-ra2web-lang';
const PATH_HEADER = 'x-ra2web-pathname';

export function proxy(request: NextRequest) {
  const langQuery = request.nextUrl.searchParams.get('lang');
  const locale = resolveLocale({
    cookie: request.cookies.get(LOCALE_COOKIE)?.value,
    langQuery,
    acceptLanguage: request.headers.get('accept-language'),
    userAgent: request.headers.get('user-agent'),
  });

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(PATH_HEADER, request.nextUrl.pathname);
  if (langQuery) requestHeaders.set(LANG_HEADER, langQuery);
  else requestHeaders.delete(LANG_HEADER);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set('Content-Language', htmlLang(locale));
  response.headers.set('Vary', 'Accept-Language, Cookie');
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|img/|api/).*)'],
};
