import React, { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { useLanguage } from "../contexts/LanguageContext";

export const Schedule = ({ languageData, landingPageData }) => {
  const { language } = useLanguage();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  
  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsNavbarVisible(scrollTop < 50); // Show navbar when within 50px of top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
      <Navigation data={landingPageData} className={isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'} />
      <div className="container">
        {/* Hero Section */}
        <div className="section-title text-center">
          <h1 className="schedule-title">{data.title}</h1>
          <p className="schedule-subtitle">{renderMarkdownText(data.subtitle)}</p>
        </div>

        {/* Main CTA */}
        <div className="schedule-cta text-center">
          <p className="cta-text">{data.ctaText}</p>
        </div>

        {/* Process Section */}
        {data.process && (
          <div className="process-section">
            <h2 className="text-center">{data.process.title}</h2>
            <div className="row">
              {data.process.steps && data.process.steps.map((step, index) => (
                <div key={index} className="col-md-4">
                  <div className="process-step">
                    <div className="step-number">{step.number}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href={`/${language}/#contact`} className="btn-custom btn-lg">
                {data.process.ctaText || "Quiero más información"}
              </a>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className="schedule-form-section">
          <div className="row">
            <div className="col-md-12">
              <div className="schedule-form-container">
                <h3 className="form-title">{data.formTitle || "Completa el formulario para agendar tu consultoría"}</h3>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/J7iQcFS5eB2DNGXYG8Ra"
                  style={{width: '100%', height: '500px', border: 'none', borderRadius: '3px'}}
                  id="inline-J7iQcFS5eB2DNGXYG8Ra" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Formulario prospect"
                  data-height="undefined"
                  data-layout-iframe-id="inline-J7iQcFS5eB2DNGXYG8Ra"
                  data-form-id="J7iQcFS5eB2DNGXYG8Ra"
                  title="Formulario prospect"
                >
                </iframe>
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
              <a href={`/${language}/#contact`} className="btn-custom btn-lg">
                {data.faq.ctaText || "Quiero más información"}
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        {data.footer && (
          <div className="schedule-footer text-center">
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
