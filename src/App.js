import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollNavigation from "./components/ScrollNavigation";
import smoothscroll from "smoothscroll-polyfill";
import heroImage from "./asset/hero-image.jpg";
import "./App.scss";

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

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-09-04T07:30:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.days}</span>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.hours}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.minutes}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-number">{timeLeft.seconds}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
}

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
  // Initialize smooth scroll polyfill
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const scrollToNextSection = () => {
    const coupleSection = document.querySelector(".couple-section");
    if (coupleSection) {
      const offsetTop = coupleSection.offsetTop;

      // Smooth scroll with better performance
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Fallback
      setTimeout(() => {
        coupleSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 10);
    }
  };

  return (
    <div className="App">
      <ScrollNavigation />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 20, 60, 0.4), rgba(80, 200, 120, 0.4)), url(${heroImage})`,
        }}
      >
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="hero-invitation">💍 Sathish & Durga</div>
          <h1 className="hero-title">are getting married</h1>
          <div className="hero-save-date">
            Save the Date: September 04, 2025
          </div>
          <div className="hero-venue">
            📍 Gokul Tirumana Mahal A/C, Tiruvannamalai, TamilNadu.
          </div>
          <div className="countdown-title">Countdown to Our Big Day</div>
          <CountdownTimer />
          <p className="hero-quote">
            ✨ "Whatever our souls are made of, his and mine are the same."
          </p>
        </motion.div>
        <div className="scroll-indicator" onClick={scrollToNextSection}></div>
      </section>

      {/* Couple Section */}
      <section className="couple-section section">
        <AnimatedSection>
          <h2 className="section-title">The Happy Couple & Our Families</h2>
          <div className="couple-container">
            <AnimatedSection animation={fadeInLeft} className="couple-card">
              <h3 className="couple-name">Sathish</h3>
              <div className="couple-details">
                <p>Son of Elumalai & TamilSelvi</p>
                <p>Senior Software Engineer at Cognizant, Chennai</p>
                <p>Born and raised in Tiruvannamalai</p>
              </div>
              <div className="family-info">
                <h4 className="family-subtitle">Groom's Family</h4>
                <div className="family-members">
                  <p>
                    <strong>Father:</strong> Elumalai
                  </p>
                  <p>
                    <strong>Mother:</strong> TamilSelvi
                  </p>
                  <p className="family-location">📍 Tiruvannamalai</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation={fadeInRight} className="couple-card">
              <h3 className="couple-name">Durga</h3>
              <div className="couple-details">
                <p>Daughter of Venkatesan & Selvanayagi</p>
                <p>Stenographer at Revenue Department (ULC), Chennai</p>
                <p>Born and raised in Vellore</p>
              </div>
              <div className="family-info">
                <h4 className="family-subtitle">Bride's Family</h4>
                <div className="family-members">
                  <p>
                    <strong>Father:</strong> Venkatesan
                  </p>
                  <p>
                    <strong>Mother:</strong> Selvanayagi
                  </p>
                  <p className="family-location">📍 Vellore</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </section>

      {/* Invitation Section */}
      <section className="invitation-section section">
        <AnimatedSection>
          <h2 className="section-title">💌 You're Invited</h2>
          <div className="invitation-content">
            <AnimatedSection className="invitation-message">
              <p className="invitation-text">
                We're so excited to celebrate this day with the people we love
                most. Join us for a day filled with love, joy, and cherished
                memories.
              </p>
            </AnimatedSection>
            <div className="wedding-events">
              <AnimatedSection animation={fadeInLeft} className="event-item">
                <h3 className="event-name">Reception</h3>
                <div className="event-details">
                  <p className="event-date">📅 September 3rd, 2025</p>
                  <p className="event-time">🕗 After 8:00 PM</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation={fadeInRight} className="event-item">
                <h3 className="event-name">Wedding Ceremony</h3>
                <div className="event-details">
                  <p className="event-date">📅 September 4th, 2025</p>
                  <p className="event-time">🕖 7:30 AM to 9:00 AM</p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="common-venue">
              <div className="venue-info">
                <h4 className="venue-title">📍 Venue</h4>
                <p className="venue-name">Gokul Tirumana Mahal A/C</p>
                <p className="venue-address">Tiruvannamalai, TamilNadu</p>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </section>

      {/* Getting There Section */}
      <section className="directions-section section">
        <AnimatedSection>
          <h2 className="section-title">🗺️ Getting There</h2>
          <div className="directions-content">
            <div className="directions-grid">
              <AnimatedSection className="direction-card">
                <h4 className="direction-from">From Tiruvannamalai Town:</h4>
                <p className="direction-text">
                  Head towards the venue which is easily accessible from the
                  town center. Follow the main roads and look for Gokul Tirumana
                  Mahal A/C signboards.
                </p>
              </AnimatedSection>

              <AnimatedSection className="direction-card">
                <h4 className="direction-from">From Chennai:</h4>
                <p className="direction-text">
                  Drive approximately 195 km via NH48 and NH234. Take the exit
                  toward Tiruvannamalai and follow local directions to the
                  venue.
                </p>
              </AnimatedSection>

              <AnimatedSection className="direction-card">
                <h4 className="direction-from">From Vellore:</h4>
                <p className="direction-text">
                  Drive approximately 85 km via SH9 toward Tiruvannamalai. The
                  venue is easily accessible once you reach the town.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection className="map-container">
              <h3 className="map-title">📌 Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.8462358932834!2d79.16747377557337!3d12.326134487933045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bacc52eece73a53%3A0x5e46788c4ec75c8f!2sGokul%20Tirumana%20Mahal%20A%2FC!5e0!3m2!1sen!2sin!4v1754685059992!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gokul Tirumana Mahal A/C Location"
              />
              <p className="map-note">
                📍 Gokul Tirumana Mahal A/C, Tiruvannamalai, TamilNadu
              </p>
            </AnimatedSection>

            <AnimatedSection className="parking-info">
              <h4 className="parking-title">🚗 Parking:</h4>
              <p className="parking-text">
                Complimentary parking available on-site with ample space for all
                guests.
              </p>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <AnimatedSection>
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-container">
            <AnimatedSection className="contact-card">
              <h3 className="contact-title">
                For any queries, please contact:
              </h3>
              <div className="contact-details">
                <p>
                  <strong>Groom's Side:</strong>
                </p>
                <p>Elumalai: [Phone Number]</p>
                <p>Sathish: [Phone Number]</p>
                <br />
                <p>
                  <strong>Bride's Side:</strong>
                </p>
                <p>Venkatesan: [Phone Number]</p>
                <p>Durga: [Phone Number]</p>
              </div>
            </AnimatedSection>
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
              <strong>Sathish & Durga</strong>
            </p>
          </div>
        </AnimatedSection>
      </footer>
    </div>
  );
}

export default App;
