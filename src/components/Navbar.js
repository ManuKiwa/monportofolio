import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const navItems = [
    { id: "header", label: "Profil" },
    { id: "experience", label: "Expériences" },
    { id: "projects", label: "Projects" },
    { id: "formation", label: "Formation" },
    { id: "skills", label: "Compétences" },
    { id: "strengths", label: "Atouts" },
    // { id: "languages", label: "Langues" },
  ];

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <a
          className="navbar-brand nav-logo"
          href="#top"
          onClick={(event) => handleSmoothScroll(event, "top")}
        >
          EK
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portfolioNav" aria-controls="portfolioNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="portfolioNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className="nav-link"
                  href={`#${item.id}`}
                  onClick={(event) => handleSmoothScroll(event, `#${item.id}`)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn theme-toggle ms-lg-3"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Mode clair' : 'Mode sombre'}
            style={{ fontSize: 22, padding: "7px 12px", color: "#fea" }}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
