import React from "react";

export const About = ({ data }) => {
  const about = data?.About || {};

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src={data?.aboutImage || "/img/about.jpg"}
              className="img-responsive"
              alt={about.imageAlt || "Adelsoft"}
              loading="lazy"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              {about.eyebrow ? (
                <p className="section-eyebrow section-eyebrow-left">{about.eyebrow}</p>
              ) : null}
              <h2>{about.title || "About"}</h2>
              <p>{about.paragraph || "loading..."}</p>
              {about.quote ? (
                <blockquote className="about-quote">
                  <p>{about.quote}</p>
                  {about.quoteAuthor ? <footer>{about.quoteAuthor}</footer> : null}
                </blockquote>
              ) : null}
              {about.points?.length ? (
                <div className="about-points">
                  {about.points.map((point, i) => (
                    <div key={`${point.number}-${i}`} className="about-point">
                      <div className="about-point-number">{point.number}</div>
                      <div>
                        <h3>{point.title}</h3>
                        <p>{point.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
