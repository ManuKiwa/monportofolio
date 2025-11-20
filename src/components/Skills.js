import React from "react";
import {
  FaJsSquare,
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaMicrosoft,
  FaNetworkWired,
  FaCode,
  FaTools,
} from "react-icons/fa";
import { DiMysql, DiMongodb, DiCisco } from "react-icons/di";
import { PowerBIIcon, TalendIcon, CassandraIcon } from "./Icons";

const skillIcon = {
  JavaScript: <FaJsSquare color="#F7DF1E" />,
  Python: <FaPython color="#306998" />,
  Java: <FaJava color="#f89820" />,
  PHP: <FaPhp color="#777bb3" />,
  "C#": <FaCode color="#684a99" />,
  "VB.NET": <FaCode color="#0076bb" />,
  HTML: <FaHtml5 color="#e44d26" />,
  CSS: <FaCss3Alt color="#2965f1" />,
  "Full Stack": <FaTools color="#667eea" />,
  "SQL Server": <FaDatabase color="#e28546" />,
  Oracle: <FaDatabase color="#f80000" />,
  MySQL: <DiMysql color="#4479a1" />,
  MongoDB: <DiMongodb color="#4DB33D" />,
  Cassandra: <CassandraIcon />,
  Cisco: <DiCisco color="#008cbc" />,
  GNS3: <FaNetworkWired color="#1e3a5a" />,
  Routage: <FaNetworkWired color="#1486ff" />,
  "MS Office": <FaMicrosoft color="#f25022" />,
  "Power BI": <PowerBIIcon />,
  "Talend Open Source": <TalendIcon />,
};

const skillCategories = [
  {
    category: "Langages de Programmation",
    skills: ["JavaScript", "Python", "Java", "C#", "VB.NET", "PHP"],
  },
  {
    category: "Développement Web",
    skills: ["HTML", "CSS", "Full Stack"],
  },
  {
    category: "Bases de Données",
    skills: ["SQL Server", "Oracle", "MySQL", "MongoDB", "Cassandra"],
  },
  {
    category: "Business Intelligence & ETL",
    skills: ["Power BI", "Talend Open Source"],
  },
  {
    category: "Réseau & Outils",
    skills: ["Cisco", "GNS3", "Routage", "MS Office"],
  },
];

const Skills = () => (
  <section className="section">
    <h2 className="section-title">🛠️ Compétences Techniques</h2>
    <div className="row g-3">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="col-12 col-md-6 col-lg-4">
          <div className="skill-card p-3">
            <h3 className="h6" style={{ color: "#667eea" }}>
              {cat.category}
            </h3>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="badge skill-badge d-flex align-items-center gap-1"
                  style={{ fontSize: 15 }}
                >
                  {skillIcon[skill] || <FaCode color="#888" />}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
