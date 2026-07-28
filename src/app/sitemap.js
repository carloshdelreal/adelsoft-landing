import { SITE_URL, metaByPage } from "@/lib/seo";

/** Required for `output: "export"`. */
export const dynamic = "force-static";

/** Indexable routes only — thank-you pages stay out of the sitemap. */
const INDEXABLE_PAGES = ["home", "schedule"];

export default function sitemap() {
  const lastModified = new Date();
  const entries = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/`,
          es: `${SITE_URL}/es/`,
          "x-default": `${SITE_URL}/en/`,
        },
      },
    },
  ];

  for (const page of INDEXABLE_PAGES) {
    const priority = page === "home" ? 1 : 0.9;

    for (const lang of ["en", "es"]) {
      const meta = metaByPage[page][lang];

      entries.push({
        url: `${SITE_URL}${meta.path}`,
        lastModified,
        changeFrequency: "monthly",
        priority,
        alternates: {
          languages: {
            en: `${SITE_URL}${metaByPage[page].en.path}`,
            es: `${SITE_URL}${metaByPage[page].es.path}`,
            "x-default": `${SITE_URL}${metaByPage[page].en.path}`,
          },
        },
      });
    }
  }

  return entries;
}
