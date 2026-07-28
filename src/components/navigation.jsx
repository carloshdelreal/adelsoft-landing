import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Navigation = ({ data, className }) => {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navText = data?.languages?.[language]?.nav || {
    features: "Features",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    testimonials: "Testimonials",
    team: "Team",
    contact: "Contact",
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${className || ""}`}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle ${menuOpen ? "" : "collapsed"}`}
            aria-expanded={menuOpen}
            aria-controls="bs-example-navbar-collapse-1"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href={`/${language}/#page-top`}>
            Adelsoft
          </a>
        </div>

        <div
          className={`navbar-collapse collapse ${menuOpen ? "in" : ""}`}
          id="bs-example-navbar-collapse-1"
          aria-expanded={menuOpen}
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href={`/${language}/#features`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.features}
              </a>
            </li>
            <li>
              <a
                href={`/${language}/#about`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.about}
              </a>
            </li>
            <li>
              <a
                href={`/${language}/#services`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.services}
              </a>
            </li>
            <li>
              <a
                href={`/${language}/#portfolio`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.gallery}
              </a>
            </li>
            <li>
              <a
                href={`/${language}/#testimonials`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.testimonials}
              </a>
            </li>
            <li>
              <a
                href={`/${language}/#team`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.team}
              </a>
            </li>
            <li>
              <a
                href={`/${language}/#contact`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.contact}
              </a>
            </li>
            <li className="language-selector">
              <button
                onClick={toggleLanguage}
                className="language-btn"
                type="button"
                aria-label={
                  language === "en" ? "Switch to Spanish" : "Cambiar a inglés"
                }
                title={
                  language === "en" ? "Cambiar a Español" : "Switch to English"
                }
              >
                {language === "en" ? "ES" : "EN"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
