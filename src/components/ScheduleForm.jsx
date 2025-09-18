import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const ScheduleForm = ({ languageData }) => {
  const { language } = useLanguage();

  
  const renderMarkdownText = (text) => {
    if (!text) return "";
    return text.split('**').map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  // Extract Schedule data from the language data
  const data = languageData?.Schedule || {};
  
  // Show loading state if data is not available yet
  if (!data || !data.title) {
    return (
      <div className="schedule-page">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="schedule-title">Cargando...</h1>
            <p className="schedule-subtitle">Por favor espera mientras cargamos la información.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="schedule-page">
      <div className="container">
        {/* Hero Section */}
        <div className="section-title text-center">
          <h3 className="cta-text">{data.title}</h3>
          <h3 className="schedule-title">{renderMarkdownText(data.subtitle)}</h3>
        </div>

        {/* Main CTA */}
        <div className="schedule-cta text-center">
          <h1 className="schedule-cta-text">{data.ctaText}</h1>
        </div>

        {/* Contact Form */}
        <div className="schedule-form-section">
          <div className="row">
            <div className="col-md-12">
              <div className="schedule-form-container">
                <h3 className="form-title">{data.formTitle || "Completa el formulario para agendar tu consultoría"}</h3>
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/6C3Y0Zb0uL02cO9U7Rp6" 
                  style={{
                    width: '100%',
                    height: '600px',
                    border: 'none',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    minHeight: '500px'
                  }} 
                  scrolling="no" 
                  id="6C3Y0Zb0uL02cO9U7Rp6_1758204479788"
                  title="Booking Widget"
                />
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        {data.successStories && (
          <div className="success-stories-section text-center">
            <h2 className="success-title">{data.successStories.title}</h2>
            <a href={`/${language}/#contact`} className="btn-custom btn-lg">
              {data.successStories.ctaText || "Quiero más información"}
            </a>
          </div>
        )}

        {/* Why Trust Us */}
        {data.whyTrust && (
          <div className="why-trust-section">
            <h2 className="text-center">{data.whyTrust.title}</h2>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <p className="trust-description">{renderMarkdownText(data.whyTrust.description)}</p>
              </div>
            </div>
            <div className="text-center">
              <a href={`/${language}/#contact`} className="btn-custom btn-lg">
                {data.whyTrust.ctaText || "Quiero más información"}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
