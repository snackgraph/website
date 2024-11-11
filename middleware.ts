import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { locales } from "@/app/navigation";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    defaultLocale: "en",
    localePrefix: "never",
    locales,
    localeDetection: true,
  });
  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
