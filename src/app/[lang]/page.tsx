import { i18n, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import ValueCycle from "@/components/value-cycle";
import Features from "@/components/features";
import Disciplines from "@/components/disciplines";
import HowItWorks from "@/components/how-it-works";
import Proof from "@/components/proof";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const raw = (await params).lang;
  const lang = isLocale(raw) ? raw : i18n.defaultLocale;
  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: dict.meta.description,
        areaServed: "ES",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/${lang}`,
        name: SITE_NAME,
        inLanguage: lang,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[var(--z-toast)] focus:rounded-lg focus:bg-[var(--color-sea)] focus:px-4 focus:py-2 focus:text-[var(--color-foam)]"
      >
        {lang === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>

      <Header lang={lang} nav={dict.nav} langLabels={dict.lang} />

      <main id="contenido">
        <Hero dict={dict.hero} />
        <Problem dict={dict.problem} />
        <ValueCycle dict={dict.value} />
        <Features dict={dict.features} />
        <Disciplines dict={dict.disciplines} />
        <HowItWorks dict={dict.how} />
        <Proof dict={dict.proof} />
        <Pricing dict={dict.pricing} />
        <Faq dict={dict.faq} />
        <FinalCta dict={dict.cta} />
      </main>

      <Footer lang={lang} dict={dict.footer} />

      <a
        href="https://wa.me/34000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full shadow-lg transition-transform hover:scale-105"
        style={{ background: "#25D366", color: "#fff", zIndex: "var(--z-overlay)" }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.03h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.48-.01c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
        </svg>
      </a>
    </>
  );
}
