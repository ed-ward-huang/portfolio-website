import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import "./components/Navbar.css";
import "./App.css";
import Contact from "./components/Contact";
import SectionTitle from "./components/SectionTitle.jsx"

const TAB_LABELS = {
  about: "About Me",
  experiences: "Experience",
  projects: "Projects",
  contact: "Contact Me",
};

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}



export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const isMobile = useMediaQuery("(max-width:768px)");

  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastScrollY.current || currentY < 50);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const handleNavClick = (key) => {
    if (isMobile) {
      document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
      setActiveTab(key);
    } else {
      setActiveTab(key);
    }
  };

  if (isMobile) {
    return (
      <div className="app-wrapper mobile">
        <Navbar
          activeTab={activeTab}
          onTabChange={handleNavClick}
          tabs={[
            { key: "experiences", label: "Experience" },
            { key: "projects", label: "Projects" },
            { key: "contact", label: "Contact" },
          ]}
          className={showNav ? "" : "hidden"}
        />
        <Sidebar />

        <div className="content">
          <main className="main-content">
            <section id="about">
              <SectionTitle>About Me</SectionTitle>
              <About />
            </section>
            <section id="experiences">
              <SectionTitle>Experience</SectionTitle>
              <Experiences />
            </section>
            <section id="projects">
              <SectionTitle>Projects</SectionTitle>
              <Projects />
            </section>
            <section id="contact">
              <SectionTitle>Contact Me</SectionTitle>
              <Contact />
            </section>
          </main>
        </div>
      </div>
    );
  }



  return (
    <div className="app-wrapper desktop">
      <Sidebar />

      <div className="content">
        <main className="main-content">
          <div className="header-nav">
            <SectionTitle key={activeTab}>{TAB_LABELS[activeTab]}</SectionTitle>
            <Navbar activeTab={activeTab} onTabChange={handleNavClick} />
          </div>
          {activeTab === "about" && <About />}
          {activeTab === "experiences" && <Experiences />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "contact" && <Contact />}
        </main>
      </div>
    </div>
  );
}
