import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n, isValidLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Check for locale in cookie or Accept-Language header
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const acceptLanguage = request.headers.get("Accept-Language");

  let detectedLocale: string = i18n.defaultLocale;

  // Priority: cookie > Accept-Language > default
  if (cookieLocale && isValidLocale(cookieLocale)) {
    detectedLocale = cookieLocale;
  } else if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().substring(0, 2))
      .find((lang) => isValidLocale(lang));

    if (preferredLocale) {
      detectedLocale = preferredLocale;
    }
  }

  // Redirect to the locale-prefixed path
  const newUrl = new URL(`/${detectedLocale}${pathname}`, request.url);
  newUrl.search = request.nextUrl.search;

  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip internal paths and static files
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
