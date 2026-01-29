## Mon Portfolio – Emmanuel KIWA

Ce dépôt contient le code source de mon **portfolio développeur**, créé avec **React 18** et **Create React App**.

Le site est déployé sur **GitHub Pages** à l’adresse suivante :  
`https://manukiwa.github.io/monportofolio/`

---

### 🚀 Aperçu du projet

- **Technos principales**: React, JavaScript, CSS, Bootstrap / React‑Bootstrap, React Icons  
- **Contenu du site** :
  - Présentation / profil
  - Formations & expériences
  - Compétences techniques & soft skills
  - Projets (Campus Connect, SignBridge, etc.)
  - CV téléchargeable au format PDF

Le code principal de l’application se trouve dans le dossier `src` et les composants sont organisés dans `src/components`.

---

### 🧱 Structure principale

- `src/App.js` : point d’entrée de l’interface
- `src/components/` : composants du site (`Header`, `Navbar`, `Projects`, `Experience`, etc.)
- `src/assets/` : images de profil, captures de projets, CV PDF
- `public/` : fichiers statiques de base de Create React App

---

### 💻 Scripts disponibles

Dans le répertoire du projet, tu peux lancer :

- **Démarrer en local**

  ```bash
  npm start
  ```

  L’application démarre sur `http://localhost:3000`.

- **Build de production**

  ```bash
  npm run build
  ```

  Le build optimisé est généré dans le dossier `build/`.

---

### 🌐 Déploiement sur GitHub Pages

Le projet est configuré pour être déployé sur GitHub Pages à l’URL :  
`https://manukiwa.github.io/monportofolio/`

#### 1. Configuration dans `package.json`

- Champ `homepage` :

  ```json
  "homepage": "https://manukiwa.github.io/monportofolio"
  ```

- Scripts de déploiement :

  ```json
  "scripts": {
    "start": "react-scripts start",
    "build": "cross-env NODE_OPTIONS=--max-old-space-size=4096 react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
  ```

#### 2. Déploiement automatique avec GitHub Actions

Un workflow est défini dans `.github/workflows/deploy.yml` :

- À chaque **push sur la branche `main`**, GitHub :
  - installe les dépendances
  - lance `npm run build`
  - exécute `npm run deploy` pour mettre à jour la branche `gh-pages`

Sur GitHub :

- Va dans **Settings → Pages**
- Choisis :
  - **Source** : `Deploy from a branch`
  - **Branch** : `gh-pages`
  - **Folder** : `/ (root)`

Après quelques minutes, ton portfolio est disponible à  
`https://manukiwa.github.io/monportofolio/`.

---

### 📄 Remarque

Ce code est le support de mon portfolio personnel.  
Merci de ne pas réutiliser tel quel mon contenu (textes, images, CV).

