import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Header = ({ data }) => {
  const { language } = useLanguage();
  
  const learnMoreText = language === 'es' ? 'Saber Más' : 'Learn More';

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {data?.Header?.title || "Loading"}
                  <span></span>
                </h1>
                <p>{data?.Header?.paragraph || "Loading"}</p>
                <a
                  href={`/${language}#features`}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {learnMoreText}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
