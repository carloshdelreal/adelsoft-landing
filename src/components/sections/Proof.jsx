import React from "react";

export const Proof = ({ data }) => {
  const proof = data?.Proof;
  if (!proof) return null;

  return (
    <div id="proof" className="text-center">
      <div className="container">
        {proof.trustedLabel && proof.trustedBy ? (
          <div className="proof-trusted">
            <p className="proof-trusted-label">{proof.trustedLabel}</p>
            <p className="proof-trusted-list">{proof.trustedBy}</p>
          </div>
        ) : null}

        {proof.stats?.length ? (
          <div className="row proof-stats">
            {proof.stats.map((stat, i) => (
              <div key={`${stat.value}-${i}`} className="col-xs-6 col-md-3 proof-stat">
                <div className="proof-stat-value">{stat.value}</div>
                <div className="proof-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
