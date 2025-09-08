import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export const Testimonials = (props) => {
  const { language } = useLanguage();
  
  const testimonialsTitle = language === 'es' ? 'Lo que dicen nuestros clientes' : 'What our clients say';

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>{testimonialsTitle}</h2>
        </div>
        <div className="row" style={{ margin: 0 }}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
