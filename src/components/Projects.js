// src/components/Projects.js
import React, { useEffect, useRef } from "react";
import {
  FaRobot,
  FaChartLine,
  FaShieldAlt,
  FaUniversity,
  FaExternalLinkAlt,
  FaHandPaper,
  FaTooth, // Nouvelle icône pour le cabinet dentaire
} from "react-icons/fa";

// Import des images depuis le dossier assets
import chatbotImage from "../assets/images/projects/chatbot.jpg";
import salaryImage from "../assets/images/projects/salary-prediction.jpg";
import fakeNewsImage from "../assets/images/projects/fake-news.png";
import campusConnectImage from "../assets/images/projects/campus-connect.png";
import signBridgeImage from "../assets/images/projects/signbridge.jpeg";
import dentalCabinetImage from "../assets/images/projects/dentalcabinet.png";

const projects = [
  {
    title: "SignBridge",
    icon: <FaHandPaper color="#4A90E2" size={36} />,
    image: signBridgeImage,
    link: "https://github.com/ManuKiwa/signbridge",
    description:
      "Plateforme d'accessibilité universelle : traduction bidirectionnelle Audio ↔ LSF en temps réel avec avatar 3D et apprentissage interactif IA.",
    tags: ["Three.js", "MediaPipe", "TensorFlow.js", "LSF"],
    featured: true,
  },
  {
    title: "Gestion Cabinet Dentaire",
    icon: <FaTooth color="#00C851" size={36} />,
    image: dentalCabinetImage, 
    link: "https://github.com/ManuKiwa/CabinetDentaire",
    description:
      "Application web .NET Core (ASP.NET MVC) pour centraliser RDV, patients et gestion dentaire avec architecture performante et sécurisée.",
    tags: [".NET Core", "ASP.NET MVC", "SQL Server", "Gestion Dentaire"],
    featured: false,
  },
  {
    title: "Smart Payroll AI",
    icon: <FaChartLine color="#4db6ac" size={36} />,
    image: salaryImage,
    link: "https://github.com/ManuKiwa/prediction-salaire",
    description:
      "Prédiction salaire IA avec interface web, API REST, réentraînement en live et dataset personnalisable (1000+ employés).",
    tags: ["Python", "Machine Learning", "Flask", "Scikit-learn", "API REST", "Data Science"],
  },
  {
    title: "Détection Fake News",
    icon: <FaShieldAlt color="#ff7043" size={36} />,
    image: fakeNewsImage,
    link: "https://github.com/ManuKiwa/detection-fake-news",
    description:
      "Système ML pour détecter articles trompeurs en temps réel avec classification NLP avancée.",
    tags: ["Python", "ML", "NLP", "Scikit-learn", "Flask", "TensorFlow"],
  },
  {
    title: "CampusConnect",
    icon: <FaUniversity color="#283593" size={36} />,
    image: campusConnectImage,
    link: "https://github.com/ManuKiwa/CampusConnect-Public",
    description:
      "Plateforme Laravel pour réseau étudiants : échanges infos, événements, mise en relation.",
    tags: ["Laravel", "MySQL", "PHP", "Bootstrap", "JavaScript"],
  },
  {
    title: "Chatbot IA",
    icon: <FaRobot color="#6c63ff" size={36} />,
    image: chatbotImage,
    link: "https://github.com/ManuKiwa/chatbot-ia",
    description:
      "Assistant conversationnel intelligent avec NLP pour automatiser réponses et support.",
    tags: ["Python", "NLP", "Flask", "TensorFlow", "IA Conversationnelle"],
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
              className={`card project-card p-3 shadow-sm ${project.featured ? 'project-featured' : ''}`}
              style={{
                minWidth: 320,
                maxWidth: 420,
                borderRadius: 14,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                scrollSnapAlign: "center",
                scrollSnapStop: "always",
                border: project.featured ? "2px solid #4A90E2" : undefined,
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
                        project.featured 
                          ? "linear-gradient(135deg, #4A90E2 0%, #7ED321 100%)"
                          : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                    }}
                  />
                </div>
              )}
              {project.featured && (
                <div 
                  className="badge bg-primary text-white mb-2"
                  style={{
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.75rem",
                  }}
                >
                  ⭐ Projet Phare
                </div>
              )}
              <div className="mb-2">{project.icon}</div>
              <h3 className="h6 mb-1 text-center project-card-title">
                {project.title}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card-link"
                    aria-label={`Lien vers ${project.title}`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </h3>
              <div className="mb-2 text-center project-card-description">
                {project.description}
              </div>
              {project.tags && (
                <div className="d-flex flex-wrap gap-1 justify-content-center mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge bg-secondary"
                      style={{
                        fontSize: "0.7rem",
                        padding: "0.25rem 0.5rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
