import type { MetadataRoute } from "next";
import { i18n } from "@/i18n/config";
import { legalSlugs } from "@/content/legal";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...Object.values(legalSlugs).map((s) => `/${s}`)];
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const lang of i18n.locales) {
      entries.push({
        url: `${SITE_URL}/${lang}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "monthly" : "yearly",
        priority: path === "" ? 1 : 0.3,
        alternates: {
          languages: Object.fromEntries(
            i18n.locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
          ),
        },
      });
    }
  }

  return entries;
}
