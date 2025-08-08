import React, { useState, useEffect, useMemo } from "react";
import "./ScrollNavigation.css";

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(
    () => [
      { id: "hero", name: "🏠", title: "Home" },
      { id: "couple", name: "💑", title: "Couple" },
      { id: "details", name: "📅", title: "Details" },
      { id: "timeline", name: "💕", title: "Journey" },
      { id: "gallery", name: "📸", title: "Gallery" },
      { id: "footer", name: "💌", title: "Thank You" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.querySelector(`.${section.id}-section`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`.${sectionId}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-navigation">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`nav-dot ${activeSection === section.id ? "active" : ""}`}
          onClick={() => scrollToSection(section.id)}
          title={section.title}
        >
          <span className="nav-icon">{section.name}</span>
        </button>
      ))}
    </div>
  );
};

export default ScrollNavigation;
