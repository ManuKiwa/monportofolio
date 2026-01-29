// src/components/Skills.js
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
  FaCube,
  FaBrain,
  FaDocker,
  FaReact,
} from "react-icons/fa";
import { 
  DiMysql, 
  DiMongodb, 
  DiCisco,
} from "react-icons/di";
import { PowerBIIcon, TalendIcon, CassandraIcon } from "./Icons";

const skillIcon = {
  // Langages de Programmation
  JavaScript: <FaJsSquare color="#F7DF1E" />,
  Python: <FaPython color="#306998" />,
  Java: <FaJava color="#f89820" />,
  PHP: <FaPhp color="#777bb3" />,
  "C#": <FaCode color="#684a99" />,
  "VB.NET": <FaCode color="#0076bb" />,
  SQL: <FaDatabase color="#0066ff" />,
  
  // Développement Web & Frontend
  HTML: <FaHtml5 color="#e44d26" />,
  CSS: <FaCss3Alt color="#2965f1" />,
  React: <FaReact color="#61dafb" />,
  "Full Stack": <FaTools color="#667eea" />,
  
  // IA & Machine Learning
  "TensorFlow.js": <FaBrain color="#FF6F00" />,
  "Deep Learning": <FaBrain color="#8B5CF6" />,
  "Data Mining": <FaDatabase color="#10B981" />,
  "Machine Learning": <FaBrain color="#F59E0B" />,
  
  // 3D & Visualisation
  "Three.js": <FaCube color="#000000" />,
  MediaPipe: <FaCube color="#00897B" />,
  WebGL: <FaCube color="#990000" />,
  
  // Bases de Données
  "SQL Server": <FaDatabase color="#e28546" />,
  Oracle: <FaDatabase color="#f80000" />,
  MySQL: <DiMysql color="#4479a1" />,
  MongoDB: <DiMongodb color="#4DB33D" />,
  Cassandra: <CassandraIcon />,
  
  // Big Data & ETL
  "Power BI": <PowerBIIcon />,
  "Talend Open Source": <TalendIcon />,
  "Data Warehousing": <FaDatabase color="#7C3AED" />,
  ETL: <FaTools color="#EC4899" />,
  
  // Outils
  Docker: <FaDocker color="#2496ED" />,
  Git: <FaCode color="#F05032" />,
  
  // Réseau
  Cisco: <DiCisco color="#008cbc" />,
  GNS3: <FaNetworkWired color="#1e3a5a" />,
  Routage: <FaNetworkWired color="#1486ff" />,
  
  // Bureautique
  "MS Office": <FaMicrosoft color="#f25022" />,
};

const skillCategories = [
  {
    category: "Intelligence Artificielle & ML",
    icon: "🤖",
    skills: [
      "TensorFlow.js",
      "Deep Learning",
      "Machine Learning",
      "Data Mining",
      "MediaPipe",
    ],
    featured: true,
    color: "#4A90E2",
  },
  {
    category: "Développement 3D & Visualisation",
    icon: "🎨",
    skills: ["Three.js", "WebGL"],
    featured: true,
    color: "#7ED321",
  },
  {
    category: "Langages de Programmation",
    icon: "💻",
    skills: ["JavaScript", "Python", "C#", "Java", "VB.NET", "PHP", "SQL"],
    color: "#667eea",
  },
  {
    category: "Développement Web",
    icon: "🌐",
    skills: ["HTML", "CSS", "React", "Full Stack"],
    color: "#764ba2",
  },
  {
    category: "Bases de Données",
    icon: "🗄️",
    skills: ["MongoDB", "Cassandra", "SQL Server", "Oracle", "MySQL"],
    color: "#4479a1",
  },
  {
    category: "Big Data & Business Intelligence",
    icon: "📊",
    skills: ["Power BI", "Talend Open Studio", "Data Warehousing", "ETL"],
    color: "#F5A623",
  },
  {
    category: "Outils & DevOps",
    icon: "🛠️",
    skills: ["Docker", "Git", "MS Office"],
    color: "#2496ED",
  },
  {
    category: "Réseau & Infrastructure",
    icon: "🔌",
    skills: ["Cisco", "GNS3", "Routage"],
    color: "#008cbc",
  },
];

const Skills = () => (
  <section className="section">
    <h2 className="section-title">🛠️ Compétences Techniques</h2>
    
    <div 
      className="mb-4 p-3 rounded d-flex align-items-center gap-3"
      style={{
        background: "linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(126, 211, 33, 0.1))",
        border: "2px solid #4A90E2",
      }}
    >
      <div style={{ fontSize: "2rem" }}>🚀</div>
      <div>
        <strong style={{ color: "#4A90E2" }}>Nouvelles compétences acquises via SignBridge :</strong>
        <p className="mb-0 mt-1" style={{ fontSize: "0.9rem", color: "#6c757d" }}>
          IA/ML (TensorFlow.js, MediaPipe) • Visualisation 3D (Three.js, WebGL) • 
          Applications d'accessibilité
        </p>
      </div>
    </div>

    <div className="row g-3">
      {skillCategories.map((cat, idx) => (
        <div 
          key={idx} 
          className={`col-12 ${cat.featured ? 'col-lg-6' : 'col-md-6 col-lg-4'}`}
        >
          <div 
            className="skill-card p-3"
            style={{
              border: `2px solid ${cat.color}`,
              background: `linear-gradient(135deg, ${cat.color}08, ${cat.color}03)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {cat.featured && (
              <div 
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: cat.color,
                  color: "white",
                  fontSize: "0.7rem",
                  padding: "0.25rem 0.75rem",
                  borderBottomLeftRadius: "8px",
                  fontWeight: "600",
                }}
              >
                ⭐ Nouveau
              </div>
            )}
            
            <div className="d-flex align-items-center gap-2 mb-3">
              <span style={{ fontSize: "1.5rem" }}>{cat.icon}</span>
              <h3 
                className="h6 mb-0" 
                style={{ 
                  color: cat.color,
                  fontWeight: cat.featured ? "600" : "500",
                }}
              >
                {cat.category}
              </h3>
            </div>
            
            <div className="d-flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className="badge skill-badge d-flex align-items-center gap-1"
                  style={{ 
                    fontSize: 15,
                    backgroundColor: `${cat.color}20`,
                    color: cat.color,
                    border: `1px solid ${cat.color}`,
                  }}
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

    {/* Section contexte formation */}
    <div className="row g-3 mt-3">
      <div className="col-12 col-md-8 col-lg-6">
        <div className="p-3 rounded" style={{
          background: "linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(126, 211, 33, 0.1))",
          borderLeft: "4px solid #4A90E2",
        }}>
          <h4 style={{ fontSize: "1rem", color: "#4A90E2", marginBottom: "0.75rem" }}>
            🎓 Expertise IA & Big Data (ISGA)
          </h4>
          <div className="d-flex flex-wrap gap-2">
            {[
              "Algorithmes Métaheuristiques",
              "Architecture Big Data",
              "Processus Décisionnel",
              "IA appliquée à la Robotique",
              "Ingénierie Logicielle",
              "Administration BDD",
            ].map((skill, i) => (
              <span
                key={i}
                className="badge"
                style={{
                  backgroundColor: "#4A90E2",
                  color: "white",
                  fontSize: "0.8rem",
                  padding: "0.4rem 0.7rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
