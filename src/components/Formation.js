import React from "react";

const formations = [
  {
    title: "Ingénierie Systèmes Informatiques - IA & Big Data",
    institution: "Institut Supérieur d'Ingénierie & des Affaires (ISGA)",
    date: "Depuis 2024 | 5ème année (3ème cycle ingénieur) | Casablanca, Maroc",
    details: [
      "Algorithmes Métaheuristiques & Data Mining",
      "Architecture Big Data & Data Warehousing",
      "Intelligence Artificielle appliquée à la Robotique",
      "Processus Décisionnel Big Data & Outils ETL",
      "Administration de bases de données",
      "Routage et communication, Administration des services réseaux",
      "Développement web, logiciels et applications mobiles",
    ],
  },
  {
    title: "Licence Sciences Informatiques",
    institution: "Université Catholique du Congo (UCC)",
    date: "2020 - 2023 | Mention: Distinction | Kinshasa, RDC",
    details: [],
  },
  {
    title: "Baccalauréat Scientifique",
    institution: "Collège Notre Dame du Congo (CNDC)",
    date: "2019 - 2020 | Option: Mathématiques et Physique | Mention: Bien",
    details: [],
  },
];

const Formation = () => (
  <section className="section">
    <h2 className="section-title">🎓 Formation</h2>
    {formations.map((form, idx) => (
      <div key={idx} className="education-card p-4 mb-3">
        <h3 className="card-title h5 mb-2">{form.title}</h3>
        <div className="institution mb-1">{form.institution}</div>
        <div className="date mb-3">{form.date}</div>
        {form.details.length > 0 && (
          <ul className="task-list">
            {form.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </section>
);

export default Formation;
