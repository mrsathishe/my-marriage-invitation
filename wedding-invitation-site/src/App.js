import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollNavigation from "./components/ScrollNavigation";
import "./App.css";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function AnimatedSection({ children, animation = fadeInUp, className = "" }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <ScrollNavigation />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220, 20, 60, 0.3), rgba(80, 200, 120, 0.3)), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E\")",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="hero-title">Sathish & [Bride Name]</h1>
          <p className="hero-subtitle">Together Forever</p>
          <div className="hero-date">Save the Date</div>
        </motion.div>
      </section>

      {/* Couple Section */}
      <section className="couple-section section">
        <AnimatedSection>
          <h2 className="section-title">The Happy Couple</h2>
          <div className="couple-container">
            <AnimatedSection animation={fadeInLeft} className="couple-card">
              <h3 className="couple-name">Sathish</h3>
              <div className="couple-details">
                <p>Son of [Father's Name] & [Mother's Name]</p>
                <p>A passionate [profession/description]</p>
                <p>Born and raised in [City]</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation={fadeInRight} className="couple-card">
              <h3 className="couple-name">[Bride Name]</h3>
              <div className="couple-details">
                <p>Daughter of [Father's Name] & [Mother's Name]</p>
                <p>A wonderful [profession/description]</p>
                <p>Born and raised in [City]</p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </section>

      {/* Event Details Section */}
      <section className="details-section section">
        <AnimatedSection>
          <h2 className="section-title">Wedding Details</h2>
          <div className="event-details">
            <AnimatedSection className="event-card">
              <h3 className="event-title">Engagement Ceremony</h3>
              <div className="event-info">
                <p>
                  <strong>Date:</strong> [Date]
                </p>
                <p>
                  <strong>Time:</strong> [Time]
                </p>
                <p>
                  <strong>Venue:</strong> [Venue Name]
                </p>
                <p>
                  <strong>Address:</strong> [Full Address]
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="event-card">
              <h3 className="event-title">Wedding Ceremony</h3>
              <div className="event-info">
                <p>
                  <strong>Date:</strong> [Date]
                </p>
                <p>
                  <strong>Time:</strong> [Time]
                </p>
                <p>
                  <strong>Venue:</strong> [Venue Name]
                </p>
                <p>
                  <strong>Address:</strong> [Full Address]
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="event-card">
              <h3 className="event-title">Reception</h3>
              <div className="event-info">
                <p>
                  <strong>Date:</strong> [Date]
                </p>
                <p>
                  <strong>Time:</strong> [Time]
                </p>
                <p>
                  <strong>Venue:</strong> [Venue Name]
                </p>
                <p>
                  <strong>Address:</strong> [Full Address]
                </p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section section">
        <AnimatedSection>
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            <AnimatedSection animation={fadeInLeft} className="timeline-item">
              <div className="timeline-time">First Met</div>
              <div className="timeline-event">
                Our paths crossed for the first time and we knew there was
                something special.
              </div>
            </AnimatedSection>

            <AnimatedSection animation={fadeInRight} className="timeline-item">
              <div className="timeline-time">First Date</div>
              <div className="timeline-event">
                A magical evening that marked the beginning of our beautiful
                journey together.
              </div>
            </AnimatedSection>

            <AnimatedSection animation={fadeInLeft} className="timeline-item">
              <div className="timeline-time">The Proposal</div>
              <div className="timeline-event">
                The moment when we decided to spend the rest of our lives
                together.
              </div>
            </AnimatedSection>

            <AnimatedSection animation={fadeInRight} className="timeline-item">
              <div className="timeline-time">Wedding Day</div>
              <div className="timeline-event">
                The day we become one, surrounded by our loved ones.
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section">
        <AnimatedSection>
          <h2 className="section-title">Our Memories</h2>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <AnimatedSection key={item} className="gallery-item">
                Photo {item}
                <br />
                <small>(Image placeholder)</small>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <AnimatedSection>
          <div className="footer-content">
            <h2 className="footer-title">Thank You</h2>
            <p className="footer-message">
              We are incredibly grateful for your love and support as we begin
              this new chapter of our lives. Your presence at our wedding would
              make our special day even more meaningful. We can't wait to
              celebrate with you!
            </p>
            <br />
            <p className="footer-message">
              With love and gratitude,
              <br />
              <strong>Sathish & [Bride Name]</strong>
            </p>
          </div>
        </AnimatedSection>
      </footer>
    </div>
  );
}

export default App;
