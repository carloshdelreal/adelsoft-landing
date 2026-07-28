const SITE_URL = "https://adelsoft.co";
const OG_IMAGE = `${SITE_URL}/img/og.jpg`;

const metaByPage = {
  home: {
    en: {
      title: "Adelsoft Web Development",
      description:
        "Web development services. We build the apps your customers will love and your competition will hate.",
      path: "/en/",
      altPath: "/es/",
    },
    es: {
      title: "Adelsoft Desarrollo Web",
      description:
        "Servicios de desarrollo web. Creamos las aplicaciones que tus clientes amarán y tu competencia odiará.",
      path: "/es/",
      altPath: "/en/",
    },
  },
  schedule: {
    en: {
      title: "Schedule a Call | Adelsoft",
      description:
        "Book a free consultation with Adelsoft Web Development. Pick a convenient time and tell us about your project.",
      path: "/en/schedule/",
      altPath: "/es/agendar/",
    },
    es: {
      title: "Agendar una llamada | Adelsoft",
      description:
        "Agenda una consultoría gratuita con Adelsoft Desarrollo Web. Elige un horario conveniente y cuéntanos sobre tu proyecto.",
      path: "/es/agendar/",
      altPath: "/en/schedule/",
    },
  },
  thankyou: {
    en: {
      title: "Thank You | Adelsoft",
      description: "Thanks for getting in touch with Adelsoft.",
      path: "/en/thankyou/",
      altPath: "/es/gracias/",
    },
    es: {
      title: "Gracias | Adelsoft",
      description: "Gracias por contactar a Adelsoft.",
      path: "/es/gracias/",
      altPath: "/en/thankyou/",
    },
  },
};

export function buildMetadata(page, lang) {
  const meta = metaByPage[page]?.[lang] || metaByPage.home.en;
  const url = `${SITE_URL}${meta.path}`;
  const altUrl = `${SITE_URL}${meta.altPath}`;
  const altLang = lang === "en" ? "es" : "en";

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        [lang]: url,
        [altLang]: altUrl,
        "x-default": `${SITE_URL}/en/`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Adelsoft",
      title: meta.title,
      description: meta.description,
      url,
      locale: lang === "es" ? "es_ES" : "en_US",
      images: [
        {
          url: OG_IMAGE,
          secureUrl: OG_IMAGE,
          type: "image/jpeg",
          width: 1200,
          height: 630,
          alt: "Adelsoft Web Development",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}

export { SITE_URL, OG_IMAGE, metaByPage };
