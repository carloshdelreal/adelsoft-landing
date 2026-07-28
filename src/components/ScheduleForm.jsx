import React, { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const BOOKING_WIDGET_ID = "qXAvUCrNfIvgyf4u14y7";

export const ScheduleForm = ({ languageData }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const renderMarkdownText = (text) => {
    if (!text) return "";
    return text.split("**").map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  const data = languageData?.Schedule || {};
  const loadingTitle = language === "es" ? "Cargando..." : "Loading...";
  const loadingSubtitle =
    language === "es"
      ? "Por favor espera mientras cargamos la información."
      : "Please wait while we load the information.";

  if (!data.title) {
    return (
      <div className="schedule-page">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="schedule-title">{loadingTitle}</h1>
            <p className="schedule-subtitle">{loadingSubtitle}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="schedule-page">
      <div className="container">
        <div className="section-title text-center">
          <h3 className="cta-text">{data.title}</h3>
          <h3 className="schedule-title">{renderMarkdownText(data.subtitle)}</h3>
        </div>

        <div className="schedule-cta text-center">
          <h1 className="schedule-cta-text">{renderMarkdownText(data.ctaText)}</h1>
        </div>

        <div className="schedule-form-section">
          <div className="row">
            <div className="col-md-12">
              <div className="schedule-form-container">
                <h3 className="form-title">
                  {data.formTitle ||
                    (language === "es"
                      ? "Completa el formulario para agendar tu consultoría"
                      : "Complete the form to schedule your consultation")}
                </h3>
                <iframe
                  src={`https://api.leadconnectorhq.com/widget/booking/${BOOKING_WIDGET_ID}`}
                  className="booking-iframe"
                  scrolling="no"
                  id={`${BOOKING_WIDGET_ID}_booking`}
                  title="Booking Widget"
                />
              </div>
            </div>
          </div>
        </div>

        {data.successStories && (
          <div className="success-stories-section text-center">
            <h2 className="success-title">{data.successStories.title}</h2>
            <a href={`/${language}/#contact`} className="btn-custom btn-lg">
              {data.successStories.ctaText ||
                (language === "es" ? "Quiero más información" : "I want more information")}
            </a>
          </div>
        )}

        {data.whyTrust && (
          <div className="why-trust-section">
            <h2 className="text-center">{data.whyTrust.title}</h2>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <p className="trust-description">
                  {renderMarkdownText(data.whyTrust.description)}
                </p>
              </div>
            </div>
            <div className="text-center">
              <a href={`/${language}/#contact`} className="btn-custom btn-lg">
                {data.whyTrust.ctaText ||
                  (language === "es" ? "Quiero más información" : "I want more information")}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
