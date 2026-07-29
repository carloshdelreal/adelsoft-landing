import React from "react";

export const Process = ({ data }) => {
  const process = data?.Process;
  if (!process) return null;

  return (
    <div id="process" className="text-center">
      <div className="container">
        <div className="section-title">
          {process.eyebrow ? <p className="section-eyebrow">{process.eyebrow}</p> : null}
          <h2>{process.title}</h2>
          {process.description ? <p>{process.description}</p> : null}
        </div>
        <div className="row process-grid">
          {process.steps?.map((step, i) => (
            <div key={`${step.number}-${i}`} className="col-sm-6 col-md-3 process-step">
              <div className="process-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
