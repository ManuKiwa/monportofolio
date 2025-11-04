import React from 'react';

const Header = () => (
  <header className="header-section text-center">
    <div className="profile-section d-flex align-items-center justify-content-center gap-4 flex-wrap mb-3">
      <div className="profile-photo">EK</div>
      <div className="profile-info text-start" style={{ maxWidth: 600 }}>
        <h1 className="display-5 mb-2">Emmanuel KIWA</h1>
        <div className="subtitle fs-5 mb-3">Ingénieur Systèmes Informatiques | IA & Big Data</div>
        <p className="description mb-4">
          Étudiant passionné en 5ème année à l'ISGA, spécialisé en Intelligence Artificielle et Big Data.
          Développeur full stack avec une solide expérience en développement web, gestion de bases de données
          et administration réseau. À la recherche d'un stage de fin d'études pour apporter innovation et
          expertise technique à des projets d'envergure.
        </p>
        <a href="#" className="btn btn-download d-inline-flex align-items-center gap-2" onClick={() => alert('Cliquez pour télécharger le CV PDF')}>
          <span>📄</span> Télécharger mon CV
        </a>
      </div>
    </div>

    <div className="contact-info d-flex gap-4 justify-content-center flex-wrap mt-3">
      <div className="contact-item">📧 manu.kiwa01@gmail.com</div>
      <div className="contact-item">📱 0664-320155</div>
      <div className="contact-item">📍 Casablanca, Maroc</div>
      <div className="contact-item">💻 github.com/ManuKiwa</div>
    </div>
  </header>
);

export default Header;
