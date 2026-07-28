import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../contexts/LanguageContext";

const SITE_URL = "https://adelsoft.co";

const metaByPage = {
  home: {
    en: {
      title: "Adelsoft Web Development",
      description:
        "Web development services. We build the apps your customers will love and your competition will hate.",
      path: "/en",
      altPath: "/es",
    },
    es: {
      title: "Adelsoft Desarrollo Web",
      description:
        "Servicios de desarrollo web. Creamos las aplicaciones que tus clientes amarán y tu competencia odiará.",
      path: "/es",
      altPath: "/en",
    },
  },
  schedule: {
    en: {
      title: "Schedule a Call | Adelsoft",
      description:
        "Book a free consultation with Adelsoft Web Development.",
      path: "/en/schedule",
      altPath: "/es/agendar",
    },
    es: {
      title: "Agendar una llamada | Adelsoft",
      description:
        "Agenda una consultoría gratuita con Adelsoft Desarrollo Web.",
      path: "/es/agendar",
      altPath: "/en/schedule",
    },
  },
  thankyou: {
    en: {
      title: "Thank You | Adelsoft",
      description: "Thanks for getting in touch with Adelsoft.",
      path: "/en/thankyou",
      altPath: "/es/gracias",
    },
    es: {
      title: "Gracias | Adelsoft",
      description: "Gracias por contactar a Adelsoft.",
      path: "/es/gracias",
      altPath: "/en/thankyou",
    },
  },
};

export const PageMeta = ({ page = "home" }) => {
  const { language } = useLanguage();
  const meta = metaByPage[page]?.[language] || metaByPage.home.en;
  const url = `${SITE_URL}${meta.path}`;
  const altUrl = `${SITE_URL}${meta.altPath}`;
  const altLang = language === "en" ? "es" : "en";

  return (
    <Helmet>
      <html lang={language} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang={language} href={url} />
      <link rel="alternate" hrefLang={altLang} href={altUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Adelsoft" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={`${SITE_URL}/img/intro-bg.jpg`} />
      <meta property="og:locale" content={language === "es" ? "es_ES" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${SITE_URL}/img/intro-bg.jpg`} />
    </Helmet>
  );
};
