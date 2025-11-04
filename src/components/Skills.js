import React from 'react';

const skillCategories = [
  {
    category: "Langages de Programmation",
    skills: ["JavaScript", "Python", "Java", "C#", "VB.NET", "PHP"]
  },
  {
    category: "Développement Web",
    skills: ["HTML", "CSS", "Full Stack"]
  },
  {
    category: "Bases de Données",
    skills: ["SQL Server", "Oracle", "MySQL", "MongoDB"]
  },
  {
    category: "Réseau & Outils",
    skills: ["Cisco", "GNS3", "Routage", "MS Office"]
  }
];

const Skills = () => (
  <section className="section">
    <h2 className="section-title">🛠️ Compétences Techniques</h2>
    <div className="row g-3">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="col-12 col-md-6 col-lg-4">
          <div className="skill-card p-3">
            <h3 className="h6" style={{ color: '#667eea' }}>{cat.category}</h3>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {cat.skills.map((skill, i) => (
                <span key={i} className="badge skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
