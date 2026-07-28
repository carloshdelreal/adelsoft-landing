import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const ThankYou = ({ data }) => {
  const { language } = useLanguage();

  const renderMarkdownText = (text) => {
    if (!text) return "";
    return text.split("**").map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  const loadingTitle = language === "es" ? "Cargando..." : "Loading...";
  const loadingSubtitle =
    language === "es"
      ? "Por favor espera mientras cargamos la información."
      : "Please wait while we load the information.";

  if (!data || !data.title) {
    return (
      <div className="thank-you-page">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="success-title">{loadingTitle}</h1>
            <p className="success-subtitle">{loadingSubtitle}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="thank-you-page">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="success-title">{data.title}</h1>
          <h3 className="success-subtitle">{renderMarkdownText(data.subtitle)}</h3>
        </div>

        {data.targetAudience && (
          <div className="target-audience-section">
            <h2 className="text-center">{data.targetAudience.title}</h2>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <ul className="audience-list">
                  {data.targetAudience.items &&
                    data.targetAudience.items.map((item, index) => (
                      <li key={index} className="audience-item">
                        <span className="bullet">⚪</span>
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="achievement-section text-center">
          <h3 className="achievement-text">
            {data.achievement ||
              (language === "es"
                ? "Desarrollamos proyectos de software exitosamente"
                : "We successfully develop software projects")}
          </h3>
          <a href={`/${language}/#contact`} className="btn-custom btn-lg">
            {data.ctaText ||
              (language === "es" ? "Quiero más información" : "I want more information")}
          </a>
        </div>
      </div>
    </div>
  );
};
