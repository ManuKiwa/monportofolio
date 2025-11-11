import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Header = () => {
  const [hoverIdx, setHoverIdx] = useState(-1);

  const contacts = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      display: "Emmanuel Kiwa",
      href: "https://www.linkedin.com/in/emmanuel-kiwa-00b394343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      icon: <FaEnvelope />,
      label: "Mail",
      display: "manu.kiwa01@gmail.com",
      href: "mailto:manu.kiwa01@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Téléphone",
      display: "0664-320155",
      href: "tel:0664320155",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Localisation",
      display: "Casablanca, Maroc",
      href: "#",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      display: "ManuKiwa",
      href: "https://github.com/ManuKiwa",
    },
  ];

  return (
    <header className="header-section text-center">
      <div className="profile-section d-flex align-items-center justify-content-center gap-4 flex-wrap mb-3">
        <div className="profile-photo">EK</div>
        <div className="profile-info text-start" style={{ maxWidth: 600 }}>
          <h1 className="display-5 mb-2">Emmanuel KIWA</h1>
          <div className="subtitle fs-5 mb-3">
            Ingénieur Systèmes Informatiques | IA & Big Data
          </div>
          <p className="description mb-4">
            Étudiant passionné en 5ème année à l'ISGA, spécialisé en Intelligence
            Artificielle et Big Data. Développeur full stack avec une solide
            expérience en développement web, gestion de bases de données et
            administration réseau. À la recherche d'un stage de fin d'études pour
            apporter innovation et expertise technique à des projets d'envergure.
          </p>
          <a
            href="#"
            className="btn btn-download d-inline-flex align-items-center gap-2"
            onClick={() => alert("Cliquez pour télécharger le CV PDF")}
          >
            <span>📄</span> Télécharger mon CV
          </a>
        </div>
      </div>

      <div className="contact-info d-flex gap-4 justify-content-center flex-wrap mt-3">
        {contacts.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target={["GitHub", "LinkedIn"].includes(item.label) ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="contact-item px-2"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(-1)}
            aria-label={item.label}
          >
            <span
              className="icon-contact"
              style={{
                transition: "box-shadow 0.2s, transform 0.2s",
                borderRadius: 6,
                boxShadow:
                  hoverIdx === idx
                    ? "0 4px 12px #9bbcff55"
                    : "0 0 0 0 transparent",
                color: "#0077b5",
                background: "transparent",
                padding: "6px",
                fontSize: hoverIdx === idx ? 32 : 22,
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {item.icon}
            </span>
            <span
              className="contact-label"
              style={{
                marginLeft: 10,
                opacity: 1,
                maxWidth: 240,
                whiteSpace: "nowrap",
                fontSize: 15,
                fontWeight: 500,
                transition: "none",
              }}
            >
              {item.display}
            </span>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
