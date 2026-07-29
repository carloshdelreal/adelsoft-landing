import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export const Header = ({ data }) => {
  const { language } = useLanguage();
  const header = data?.Header || {};
  const schedulePath = language === "es" ? "agendar" : "schedule";

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 intro-text">
                {header.eyebrow ? (
                  <p className="intro-eyebrow">{header.eyebrow}</p>
                ) : null}
                <h1>
                  {header.title || "Loading"}
                  <span></span>
                </h1>
                <p>{header.paragraph || "Loading"}</p>
                <div className="intro-actions">
                  <a
                    href={`/${language}/${schedulePath}/`}
                    className="btn btn-custom btn-lg"
                  >
                    {header.primaryCta ||
                      (language === "es"
                        ? "Agendar consultoría gratis"
                        : "Book a free consultation")}
                  </a>
                  <a
                    href={`/${language}/#process`}
                    className="btn btn-custom btn-lg btn-custom-outline page-scroll"
                  >
                    {header.secondaryCta ||
                      (language === "es"
                        ? "Cómo trabajamos"
                        : "See how we work")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
