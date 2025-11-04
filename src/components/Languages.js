import React from 'react';

const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "Niveau intermédiaire" }
];

const Languages = () => (
  <section className="section">
    <h2 className="section-title">🌍 Langues</h2>
    <div className="row g-3">
      {languages.map((lang, idx) => (
        <div key={idx} className="col-12 col-md-6">
          <div className="language-card p-3">
            <h3 className="h6" style={{ color: '#667eea' }}>{lang.name}</h3>
            <p className="mb-0" style={{ color: '#a0aec0' }}>{lang.level}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Languages;
