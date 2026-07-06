import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { legalSlugs } from "@/content/legal";
import Wordmark from "./wordmark";
import OpenCookieSettings from "./open-cookie-settings";

// Legal links map (by order in the dictionary): Privacidad, Términos, Cookies.
const legalOrder = [legalSlugs.privacidad, legalSlugs.avisoLegal, legalSlugs.cookies];

const productAnchors = ["#que-hace", "#precios", "#preguntas"];

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["footer"];
}) {
  return (
    <footer
      className="pt-16 pb-10"
      style={{ background: "var(--color-sea-deep)", color: "color-mix(in oklch, var(--color-foam) 78%, transparent)" }}
    >
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Wordmark tone="foam" />
            <p className="mt-4 max-w-xs text-sm" style={{ lineHeight: 1.6 }}>
              {dict.tagline}
            </p>
          </div>

          <FooterCol
            title={dict.product.title}
            items={dict.product.links.map((l, i) => ({
              label: l,
              href: `/${lang}${productAnchors[i] ?? ""}`,
            }))}
          />
          <FooterCol
            title={dict.legal.title}
            items={dict.legal.links.map((l, i) => ({
              label: l,
              href: `/${lang}/${legalOrder[i] ?? ""}`,
            }))}
          />

          <div>
            <h3 className="text-sm font-bold" style={{ color: "var(--color-foam)" }}>
              {dict.contact.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a href={`mailto:${dict.contact.email}`} className="link-underline">
                  {dict.contact.email}
                </a>
              </li>
              <li>
                <a href={`/${lang}#demo`} className="link-underline">
                  {dict.contact.demo}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "color-mix(in oklch, var(--color-foam) 16%, transparent)" }}
        >
          <span>{dict.rights}</span>
          <OpenCookieSettings label={dict.cookieSettings} className="link-underline text-left" />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold" style={{ color: "var(--color-foam)" }}>
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2 text-sm">
        {items.map((it) => (
          <li key={it.label}>
            <a href={it.href} className="link-underline">
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
