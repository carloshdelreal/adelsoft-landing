"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { landingPageData } from "@/lib/landingData";
import { Navigation } from "@/components/navigation";

const copy = {
  en: {
    code: "404",
    title: "Page not found",
    description:
      "The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.",
    home: "Back to home",
    schedule: "Schedule a call",
  },
  es: {
    code: "404",
    title: "Página no encontrada",
    description:
      "La página que buscas no existe o fue movida. Te ayudamos a volver al camino correcto.",
    home: "Volver al inicio",
    schedule: "Agendar una llamada",
  },
};

export const NotFound = () => {
  const { language } = useLanguage();
  const t = copy[language] || copy.en;
  const schedulePath = language === "es" ? "/es/agendar/" : "/en/schedule/";
  const homePath = `/${language}/`;

  return (
    <div className="not-found-page">
      <Navigation data={landingPageData} />
      <header className="not-found-hero">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text not-found-content">
                  <p className="not-found-code">{t.code}</p>
                  <h1>
                    {t.title}
                    <span></span>
                  </h1>
                  <p>{t.description}</p>
                  <div className="not-found-actions">
                    <a href={homePath} className="btn btn-custom btn-lg">
                      {t.home}
                    </a>
                    <a
                      href={schedulePath}
                      className="btn btn-custom btn-lg not-found-secondary"
                    >
                      {t.schedule}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
