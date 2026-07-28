const SITE_URL = "https://adelsoft.co";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const metaByPage = {
  home: {
    en: {
      title: "Adelsoft | Custom Software Development for Businesses",
      description:
        "Custom software development, web applications, cloud solutions and AI-powered systems for growing businesses.",
      path: "/en/",
      altPath: "/es/",
      ogDescription:
        "Custom software development, web applications, cloud solutions and AI-powered systems for growing businesses.",
      twitterDescription: "Custom software solutions for modern businesses.",
    },
    es: {
      title: "Adelsoft | Desarrollo de Software a Medida para Empresas",
      description:
        "Desarrollo de software a medida, aplicaciones web, soluciones cloud y sistemas con IA para empresas en crecimiento.",
      path: "/es/",
      altPath: "/en/",
      ogDescription:
        "Desarrollo de software a medida, aplicaciones web, soluciones cloud y sistemas con IA para empresas en crecimiento.",
      twitterDescription:
        "Soluciones de software a medida para empresas modernas.",
    },
  },
  schedule: {
    en: {
      title: "Schedule a Call | Adelsoft",
      description:
        "Book a free consultation with Adelsoft. Pick a convenient time and tell us about your project.",
      path: "/en/schedule/",
      altPath: "/es/agendar/",
      ogDescription:
        "Book a free consultation for custom software, AI automation or GIS solutions.",
    },
    es: {
      title: "Agendar una llamada | Adelsoft",
      description:
        "Agenda una consultoría gratuita con Adelsoft. Elige un horario conveniente y cuéntanos sobre tu proyecto.",
      path: "/es/agendar/",
      altPath: "/en/schedule/",
      ogDescription:
        "Agenda una consultoría gratuita para software a medida, automatización con IA o soluciones GIS.",
    },
  },
  thankyou: {
    en: {
      title: "Thank You | Adelsoft",
      description: "Thanks for getting in touch with Adelsoft.",
      path: "/en/thankyou/",
      altPath: "/es/gracias/",
      ogDescription: "Thanks for getting in touch with Adelsoft.",
    },
    es: {
      title: "Gracias | Adelsoft",
      description: "Gracias por contactar a Adelsoft.",
      path: "/es/gracias/",
      altPath: "/en/thankyou/",
      ogDescription: "Gracias por contactar a Adelsoft.",
    },
  },
};

function ogImage() {
  return {
    url: OG_IMAGE,
    secureUrl: OG_IMAGE,
    type: "image/jpeg",
    width: 1200,
    height: 630,
    alt: "Adelsoft | Custom Software Development for Businesses",
  };
}

export function buildMetadata(page, lang, { canonicalUrl } = {}) {
  const meta = metaByPage[page]?.[lang] || metaByPage.home.en;
  const url = canonicalUrl || `${SITE_URL}${meta.path}`;
  const altUrl = `${SITE_URL}${meta.altPath}`;
  const altLang = lang === "en" ? "es" : "en";
  const ogDescription = meta.ogDescription || meta.description;
  const twitterDescription =
    meta.twitterDescription || ogDescription || meta.description;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        [lang]: `${SITE_URL}${meta.path}`,
        [altLang]: altUrl,
        "x-default": `${SITE_URL}/en/`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Adelsoft",
      title: meta.title,
      description: ogDescription,
      url,
      locale: lang === "es" ? "es_ES" : "en_US",
      images: [ogImage()],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: twitterDescription,
      images: [OG_IMAGE],
    },
  };
}

/** Root URL metadata (https://adelsoft.co/) — what most people paste in WhatsApp */
export function buildRootMetadata() {
  return buildMetadata("home", "en", { canonicalUrl: `${SITE_URL}/` });
}

export { SITE_URL, OG_IMAGE, metaByPage };
