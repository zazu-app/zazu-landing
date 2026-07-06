import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { getDictionary } from "@/i18n/dictionaries";
import { i18n, isLocale } from "@/i18n/config";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import CookieConsent from "@/components/cookie-consent";
import Analytics from "@/components/analytics";
import "../globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#07131e" },
  ],
};

const KEYWORDS: Record<string, string[]> = {
  es: [
    "software escuela de surf",
    "gestión escuela náutica",
    "reservas escuela de vela",
    "software campus náutico",
    "cobrar reservas online escuela deportes acuáticos",
    "software escuela de kite",
    "gestión centro de buceo",
  ],
  en: [
    "surf school software",
    "water sports school management",
    "sailing school bookings",
    "nautical camp software",
    "online booking water sports school",
    "kite school software",
    "dive center management",
  ],
};

const toLocale = (lang: string) => (isLocale(lang) ? lang : i18n.defaultLocale);

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = toLocale((await params).lang);
  const dict = await getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: KEYWORDS[lang],
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    alternates: {
      canonical: `/${lang}`,
      languages: { es: "/es", en: "/en", "x-default": "/es" },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}`,
      siteName: SITE_NAME,
      locale: lang === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    icons: {
      icon: [
        {
          url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>",
        },
      ],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = toLocale((await params).lang);
  const dict = await getDictionary(lang);
  return (
    <html lang={lang} className={`${bricolage.variable} ${hanken.variable}`}>
      <body>
        {children}
        <CookieConsent lang={lang} dict={dict.consent} />
        <Analytics />
      </body>
    </html>
  );
}
