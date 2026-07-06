import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n, isLocale } from "@/i18n/config";

function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (header) {
    // Parse "es-ES,es;q=0.9,en;q=0.8" -> first matching base language.
    const preferred = header
      .split(",")
      .map((part) => {
        const [tag, q] = part.trim().split(";q=");
        return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);
    for (const { tag } of preferred) {
      const base = tag.split("-")[0];
      if (isLocale(base)) return base;
    }
  }
  return i18n.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API and files with an extension (assets).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
