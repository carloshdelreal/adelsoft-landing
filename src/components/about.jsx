import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const About = ({ data }) => {
  const { language } = useLanguage();
  
  const aboutUsText = language === 'es' ? 'Acerca de Nosotros' : 'About Us';
  const whyChooseUsText = language === 'es' ? '¿Por Qué Elegirnos?' : 'Why Choose Us?';

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={data?.aboutImage || "img/about.jpg"} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{aboutUsText}</h2>
              <p>{data?.About?.paragraph || "loading..."}</p>
              <h3>{whyChooseUsText}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data?.About?.Why
                      ? data.About.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data?.About?.Why2
                      ? data.About.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
