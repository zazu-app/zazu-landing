import type { Metadata } from "next";
import { i18n, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { legalContent, legalUi, legalSlugs } from "@/content/legal";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LegalPage from "@/components/legal-page";

const KEY = "cookies" as const;

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const raw = (await params).lang;
  const lang = isLocale(raw) ? raw : i18n.defaultLocale;
  const doc = legalContent[lang][KEY];
  return {
    title: `${doc.title} · Zazu`,
    description: doc.intro,
    alternates: {
      canonical: `/${lang}/${legalSlugs[KEY]}`,
      languages: { es: `/es/${legalSlugs[KEY]}`, en: `/en/${legalSlugs[KEY]}` },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const raw = (await params).lang;
  const lang = isLocale(raw) ? raw : i18n.defaultLocale;
  const dict = await getDictionary(lang);
  return (
    <>
      <Header lang={lang} nav={dict.nav} langLabels={dict.lang} />
      <LegalPage doc={legalContent[lang][KEY]} ui={legalUi[lang]} backHref={`/${lang}`} />
      <Footer lang={lang} dict={dict.footer} />
    </>
  );
}
