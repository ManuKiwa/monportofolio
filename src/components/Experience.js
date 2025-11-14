import React from 'react';

const experiences = [
  {
    title: "Stage en Développement Full Stack",
    company: "Schoolify - Casablanca, Maroc",
    date: "Juillet 2025 - Septembre 2025",
    details: [
      "Participation à l'amélioration et à la sécurisation de la plateforme web en environnement agile",
      "Collaboration avec l'équipe pour optimiser la robustesse, l'ergonomie et les fonctionnalités",
      "Contribution à l'optimisation des processus internes et à la qualité logicielle",
      "Développement agile pour garantir des livrables fiables et adaptés"
    ],
  },
  {
    title: "Stage Pratique - Systèmes Informatiques",
    company: "Office Congolais de Contrôle - Kinshasa, RDC",
    date: "Juin 2023 - Août 2023",
    details: [
      "Formation et support technique pour l'accompagnement des utilisateurs",
      "Gestion et optimisation des processus de gestion des données métiers",
      "Développement et maintenance d'outils numériques internes",
      "Amélioration de l'efficacité opérationnelle et de la collecte de données",
    ]
  },
  {
    title: "Stage Pratique - Formation Systèmes Informatiques",
    company: "Office Congolais de Contrôle - Kinshasa, RDC",
    date: "Juin 2022 - Août 2022",
    details: [
      "Formation sur le déroulement et la mise en pratique des activités du département",
    ]
  }
];

const Experience = () => (
  <section className="section">
    <h2 className="section-title">💼 Expériences Professionnelles</h2>
    <div
      className="d-flex flex-wrap gap-3"
      style={{
        justifyContent: 'center',
        alignItems: 'stretch'
      }}
    >
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="experience-card p-4 mb-3"
          style={{
            flex: '1 1 320px',
            minWidth: 260,
            maxWidth: 420,
            borderRadius: 12,
          }}
        >
          <h3 className="card-title h5 mb-2">{exp.title}</h3>
          <div className="company mb-1 text-primary">{exp.company}</div>
          <div className="date mb-3" style={{ color: '#888' }}>{exp.date}</div>
          <ul className="task-list">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
