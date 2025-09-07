import React from "react";
import { Gallery } from "./gallery";

export const ThankYou = ({ data, landingPageData }) => {
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
          <p className="success-subtitle">{renderMarkdownText(data.subtitle)}</p>
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
                      <span className="bullet">🟣</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <Gallery data={landingPageData.Gallery} description={landingPageData.GaleryDescription} />

        {/* Achievement Section */}
        <div className="achievement-section text-center">
          <h3 className="achievement-text">{data.achievement || "Desarrollamos proyectos de software exitosamente"}</h3>
          <a href="/#contact" className="btn-custom btn-lg">
            {data.ctaText || "Quiero más información"}
          </a>
        </div>

        {/* FAQ Section */}
        {data.faq && (
          <div className="faq-section">
            <h2 className="text-center">{data.faq.title}</h2>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                {data.faq.questions && data.faq.questions.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h4 className="faq-question">{faq.question}</h4>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <a href="/#contact" className="btn-custom btn-lg">
                {data.ctaText || "Quiero más información"}
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        {data.footer && (
          <div className="thank-you-footer text-center">
            <p className="copyright">{data.footer.copyright}</p>
            <p className="privacy-link">
              <a href="#privacy">{data.footer.privacy}</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
