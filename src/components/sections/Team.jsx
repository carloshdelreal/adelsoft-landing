import React from "react";

export const Team = ({ data, description, title }) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{title || "Team"}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="team-img"
                      loading="lazy"
                    />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
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
