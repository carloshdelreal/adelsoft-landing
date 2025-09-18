import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const ThankYou = ({ data }) => {
  const { language } = useLanguage();

  const renderMarkdownText = (text) => {
    if (!text) return "";
    return text.split('**').map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };
  
  // Show loading state if data is not available yet
  if (!data || !data.title) {
    return (
      <div className="thank-you-page">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="success-title">Cargando...</h1>
            <p className="success-subtitle">Por favor espera mientras cargamos la información.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="thank-you-page">
      <div className="container">
        {/* Success Message */}
        <div className="section-title text-center">
          <h1 className="success-title">{data.title}</h1>
          <h3 className="success-subtitle">{renderMarkdownText(data.subtitle)}</h3>
        </div>

        {/* Target Audience Section */}
        {data.targetAudience && (
          <div className="target-audience-section">
            <h2 className="text-center">{data.targetAudience.title}</h2>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <ul className="audience-list">
                  {data.targetAudience.items && data.targetAudience.items.map((item, index) => (
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

        {/* Achievement Section */}
        <div className="achievement-section text-center">
          <h3 className="achievement-text">{data.achievement || "Desarrollamos proyectos de software exitosamente"}</h3>
          <a href={`/${language}/#contact`} className="btn-custom btn-lg">
            {data.ctaText || "Quiero más información"}
          </a>
        </div>
      </div>
    </div>
  );
};
