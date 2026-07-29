"use client";

import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export const HomeFaq = ({ data }) => {
  const { language } = useLanguage();
  const faq = data?.Faq;
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq?.questions?.length) return null;

  const schedulePath = language === "es" ? "agendar" : "schedule";

  return (
    <div id="faq" className="home-faq">
      <div className="container">
        <div className="section-title text-center">
          {faq.eyebrow ? <p className="section-eyebrow">{faq.eyebrow}</p> : null}
          <h2>{faq.title}</h2>
          {faq.description ? <p>{faq.description}</p> : null}
        </div>

        <div className="home-faq-list">
          {faq.questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={`${item.question}-${index}`}
                className={`home-faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="home-faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="home-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="home-faq-question-text">{item.question}</span>
                  <span className="home-faq-chevron" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="home-faq-answer">
                    {item.answer.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {faq.ctaTitle || faq.ctaText ? (
          <div className="home-faq-cta text-center">
            {faq.ctaTitle ? <h3>{faq.ctaTitle}</h3> : null}
            {faq.ctaDescription ? <p>{faq.ctaDescription}</p> : null}
            <a
              href={`/${language}/${schedulePath}/`}
              className="btn btn-custom btn-lg"
            >
              {faq.ctaText ||
                (language === "es"
                  ? "Agendar consultoría"
                  : "Book a consultation")}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};
