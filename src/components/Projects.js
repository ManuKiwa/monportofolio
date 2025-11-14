// src/components/Projects.js
import React from "react";
import {
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaUniversity,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Import des images depuis le dossier assets
import chatbotImage from "../assets/images/projects/chatbot.jpg";
import salaryImage from "../assets/images/projects/salary-prediction.jpg";
import fakeNewsImage from "../assets/images/projects/fake-news.jpg";
import campusConnectImage from "../assets/images/projects/campus-connect.jpg";

const projects = [
  {
    title: "Chatbot IA",
    icon: <FaRobot color="#6c63ff" size={36} />,
    image: chatbotImage,
    link: "https://github.com/tonrepo/chatbot-ia",
    description:
      "Outil conversationnel intelligent utilisant NLP pour automatiser les réponses et l'assistance utilisateur.",
  },
  {
    title: "Prédiction de Salaire",
    icon: <FaChartLine color="#4db6ac" size={36} />,
    image: salaryImage,
    link: "https://github.com/tonrepo/prediction-salaire",
    description:
      "Modèle machine learning pour estimer le salaire sur base des compétences et du parcours professionnel.",
  },
  {
    title: "Détection de Fake News",
    icon: <FaShieldAlt color="#ff7043" size={36} />,
    image: fakeNewsImage,
    link: "https://github.com/tonrepo/detection-fake-news",
    description:
      "Système de classification pour repérer et filtrer les articles trompeurs ou non fiables en temps réel.",
  },
  {
    title: "CampusConnect",
    icon: <FaUniversity color="#283593" size={36} />,
    image: campusConnectImage,
    link: "https://github.com/ManuKiwa/CampusConnect-Public",
    description:
      "Plateforme web favorisant l'échange d'informations et la mise en réseau entre étudiants du supérieur.",
  },
];

const Projects = () => (
  <section className="section">
    <h2 className="section-title">🚀 Projets Personnels</h2>
    <div
      className="d-flex flex-nowrap gap-4 overflow-auto py-2 projects-scrollbar-hide"
      style={{
        scrollbarWidth: "thin",
        scrollSnapType: "x mandatory",
      }}
    >
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="card project-card p-3 shadow-sm"
          style={{
            minWidth: 320,
            maxWidth: 420,
            borderRadius: 14,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            scrollSnapAlign: "center",
          }}
        >
          {project.image && (
            <div
              className="mb-2 w-100"
              style={{
                height: 100,
                borderRadius: 10,
                overflow: "hidden",
                background: "#e7eaf0",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  // Fallback si l'image ne charge pas
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                }}
              />
            </div>
          )}
          <div className="mb-2">{project.icon}</div>
          <h3 className="h6 mb-1 text-center" style={{ color: "#667eea" }}>
            {project.title}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 8, color: "#667eea", fontSize: 19 }}
                aria-label={`Lien vers ${project.title}`}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </h3>
          <div
            className="mb-2 text-muted text-center"
            style={{ color: "#fff", fontSize: 15 }}
          >
            {project.description}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;