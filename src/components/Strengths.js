import React from 'react';

const strengths = [
  "Facilité d'apprentissage",
  "Esprit d'équipe",
  "Sens de l'écoute",
  "Ouvert d'esprit",
  "Esprit critique",
  "Autonome",
  "Créatif",
  "Flexible"
];

const Strengths = () => (
  <section className="section">
    <h2 className="section-title">⭐ Atouts</h2>
    <div className="row g-3">
      {strengths.map((strength, i) => (
        <div key={i} className="col-6 col-md-4 col-lg-3">
          <div className="strength-card p-3 text-center">
            <div className="card-text">{strength}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Strengths;
