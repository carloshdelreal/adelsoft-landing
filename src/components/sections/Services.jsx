import React from "react";

export const Services = ({ data }) => {
  const section = data?.ServicesSection || {};
  const services = data?.Services || [];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          {section.eyebrow ? (
            <p className="section-eyebrow">{section.eyebrow}</p>
          ) : null}
          <h2>{section.title || "Services"}</h2>
          {section.description ? <p>{section.description}</p> : null}
        </div>
        <div className="row">
          {services.length > 0
            ? services.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <i className={d.icon} aria-hidden="true"></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    {d.tags ? <p className="service-tags">{d.tags}</p> : null}
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
