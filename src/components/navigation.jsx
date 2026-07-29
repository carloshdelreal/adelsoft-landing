import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Navigation = ({ data, className }) => {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navText = data?.languages?.[language]?.nav || {
    services: "Services",
    about: "Nearshore",
    process: "How we work",
    gallery: "Work",
    team: "Team",
    faq: "FAQ",
    book: "Book a consultation",
  };

  const schedulePath = language === "es" ? "agendar" : "schedule";
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
            <img
              src="/img/logo-nav.svg"
              alt="Adelsoft"
              className="navbar-logo"
              width="200"
              height="61"
            />
          </a>
        </div>

        <div
          className={`navbar-collapse collapse ${menuOpen ? "in" : ""}`}
          id="bs-example-navbar-collapse-1"
          aria-expanded={menuOpen}
        >
          <ul className="nav navbar-nav navbar-links">
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
                href={`/${language}/#about`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.about}
              </a>
            </li>
            <li>
              <a
                href={`/${language}/#process`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.process}
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
                href={`/${language}/#team`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.team}
              </a>
            </li>
            <li>
              <a
                href={`/${language}/#faq`}
                className="page-scroll"
                onClick={closeMenu}
              >
                {navText.faq}
              </a>
            </li>
          </ul>

          <div className="navbar-actions">
            <a
              href={`/${language}/${schedulePath}/`}
              className="btn btn-custom navbar-book-btn"
              onClick={closeMenu}
            >
              {navText.book}
            </a>
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
          </div>
        </div>
      </div>
    </nav>
  );
};
