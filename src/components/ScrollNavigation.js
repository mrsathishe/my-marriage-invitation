import React, { useState, useEffect, useMemo } from "react";
import "./ScrollNavigation.scss";

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(
    () => [
      { id: "hero", name: "🏠", title: "Home" },
      { id: "couple", name: "💑", title: "Couple" },
      { id: "invitation", name: "💌", title: "Invitation" },
      { id: "directions", name: "🗺️", title: "Directions" },
      { id: "contact", name: "📞", title: "Contact" },
      { id: "footer", name: "💕", title: "Thank You" },
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
      // Use both scrollIntoView and window.scrollTo for better compatibility
      const offsetTop = element.offsetTop;

      // Smooth scroll with custom timing
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
        block: "start",
      });

      // Fallback for older browsers
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 10);
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
