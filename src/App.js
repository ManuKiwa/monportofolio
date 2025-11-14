import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Formation from "./components/Formation";
import Skills from "./components/Skills";
import Strengths from "./components/Strengths";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import NeuralBackground from "./components/NeuralBackground";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <NeuralBackground isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="main-content">
        <div className="container">
          <div id="header">
            <Header />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="formation">
            <Formation />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="strengths">
            <Strengths />
          </div>
          <div id="languages">
            <Languages />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
