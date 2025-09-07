import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Services = ({ data }) => {
  const { language } = useLanguage();
  
  const ourServicesText = language === 'es' ? 'Nuestros Servicios' : 'Our Services';
  const servicesDescription = language === 'es' 
    ? 'Ofrecemos una amplia gama de servicios de desarrollo web para satisfacer las necesidades de tu negocio.'
    : 'We offer a comprehensive range of web development services to meet your business needs.';

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{ourServicesText}</h2>
          <p>{servicesDescription}</p>
        </div>
        <div className="row">
          {data?.Services && data.Services.length > 0
            ? data.Services.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
