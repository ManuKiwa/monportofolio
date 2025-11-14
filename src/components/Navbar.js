import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand nav-logo" href="#top">EK</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portfolioNav" aria-controls="portfolioNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="portfolioNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#header">Profil</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Expériences</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#formation">Formation</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Compétences</a></li>
            <li className="nav-item"><a className="nav-link" href="#strengths">Atouts</a></li>
            <li className="nav-item"><a className="nav-link" href="#languages">Langues</a></li>
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
