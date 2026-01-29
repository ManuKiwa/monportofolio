## Mon Portfolio – Emmanuel KIWA

Ce dépôt contient le code source de mon portfolio développeur, créé avec **React 18** et **Create React App**.

Le site est déployé sur **GitHub Pages** à l’adresse suivante :  
`https://manukiwa.github.io/monportofolio/`

---

### 🚀 Aperçu du projet

- **Technos principales**: React, JavaScript, CSS, Bootstrap / React‑Bootstrap, React Icons  
- **Contenu**:
  - Présentation / profil
  - Formations & expériences
  - Compétences techniques & soft skills
  - Projets (Campus Connect, SignBridge, etc.)
  - CV téléchargeable au format PDF

Le code principal de l’application se trouve dans le dossier `src` et les composants sont organisés dans `src/components`.

---

### 🧱 Structure du projet

- `src/App.js` : point d’entrée de l’interface principale
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

#### 1. Prérequis

- Avoir un dépôt GitHub nommé **`monportofolio`** sous le compte **`manukiwa`**
- Avoir installé les dépendances du projet :

  ```bash
  npm install
  ```

#### 2. Build de l’application

```bash
npm run build
```

#### 3. Publication sur GitHub

Si tu utilises l’onglet **Pages** de GitHub avec la branche `main` :

- Va dans **Settings → Pages**
- Choisis :
  - **Source** : `Deploy from a branch`
  - **Branch** : `main` (ou `master`)
  - **Folder** : `/(root)` ou `docs` selon ta configuration

Sinon, tu peux utiliser `gh-pages` (npm) pour déployer automatiquement le dossier `build` vers une branche `gh-pages`.

---

### 📄 Licence

Projet personnel de **Emmanuel KIWA**.  
Tu peux t’inspirer de la structure, mais merci de ne pas réutiliser mon contenu (texte, images, CV) tel quel.

