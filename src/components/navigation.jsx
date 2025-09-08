import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Navigation = ({ data, className }) => {
  const { language, toggleLanguage } = useLanguage();
  
  // Get navigation text based on current language
  const navText = data?.languages?.[language]?.nav || {
    features: "Features",
    about: "About", 
    services: "Services",
    gallery: "Gallery",
    testimonials: "Testimonials",
    team: "Team",
    contact: "Contact"
  };

  return (
    <nav id="menu" className={`navbar navbar-default navbar-fixed-top ${className || ''}`}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href={`/${language}#page-top`}>
            Adelsoft
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href={`/${language}#features`} className="page-scroll">
                {navText.features}
              </a>
            </li>
            <li>
              <a href={`/${language}#about`} className="page-scroll">
                {navText.about}
              </a>
            </li>
            <li>
              <a href={`/${language}#services`} className="page-scroll">
                {navText.services}
              </a>
            </li>
            <li>
              <a href={`/${language}#portfolio`} className="page-scroll">
                {navText.gallery}
              </a>
            </li>
            <li>
              <a href={`/${language}#testimonials`} className="page-scroll">
                {navText.testimonials}
              </a>
            </li>
            <li>
              <a href={`/${language}#team`} className="page-scroll">
                {navText.team}
              </a>
            </li>
            <li>
              <a href={`/${language}#contact`} className="page-scroll">
                {navText.contact}
              </a>
            </li>
            <li className="language-selector">
              <button 
                onClick={toggleLanguage}
                className="language-btn"
                title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
