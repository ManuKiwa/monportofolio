// src/components/Projects.js
import React, { useEffect, useRef } from "react";
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

const Projects = () => {
  const repetitionCount = 3;
  const containerRef = useRef(null);
  const segmentWidthRef = useRef(0);
  const seamlessProjects = Array.from({ length: repetitionCount }, () => projects).flat();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const updateSegmentWidth = () => {
      segmentWidthRef.current =
        container.scrollWidth > 0
          ? container.scrollWidth / repetitionCount
          : 0;
    };

    const initializePosition = () => {
      if (!segmentWidthRef.current) {
        updateSegmentWidth();
      }
      if (segmentWidthRef.current) {
        container.scrollLeft = segmentWidthRef.current;
      }
    };

    const handleScroll = () => {
      const segment = segmentWidthRef.current;
      if (!segment) return;
      const minThreshold = segment * 0.1;
      const maxThreshold = segment * (repetitionCount - 1) - minThreshold;

      if (container.scrollLeft <= minThreshold) {
        container.scrollLeft += segment;
      } else if (container.scrollLeft >= maxThreshold) {
        container.scrollLeft -= segment;
      }
    };

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    };

    updateSegmentWidth();
    requestAnimationFrame(initializePosition);

    const resizeHandler = () => {
      const previousSegment = segmentWidthRef.current;
      updateSegmentWidth();
      if (!previousSegment) {
        initializePosition();
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", resizeHandler);

    const recalibrationTimeout = setTimeout(() => {
      initializePosition();
    }, 600);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", resizeHandler);
      clearTimeout(recalibrationTimeout);
    };
  }, [repetitionCount]);

  return (
    <section className="section">
      <h2 className="section-title">🚀 Projets Personnels</h2>
      <div
        className="projects-marquee projects-scrollbar-hide"
        ref={containerRef}
      >
        <div className="projects-track">
          {seamlessProjects.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className="card project-card p-3 shadow-sm"
              style={{
                minWidth: 320,
                maxWidth: 420,
                borderRadius: 14,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                scrollSnapAlign: "center",
                scrollSnapStop: "always",
              }}
            >
              {project.image && (
                <div
                  className="mb-2 w-100"
                  style={{
                    height: 140,
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
                      objectPosition: "center",
                    }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
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
      </div>
    </section>
  );
};

export default Projects;