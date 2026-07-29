import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export const Features = ({ data }) => {
  const { language } = useLanguage();
  
  const featuresText = language === 'es' ? 'Características' : 'Features';

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{featuresText}</h2>
        </div>
        <div className="row features-grid">
          {data?.Features && data.Features.length > 0
            ? data.Features.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-6 col-md-3 feature-item"
                >
                  <i className={d.icon} aria-hidden="true"></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
