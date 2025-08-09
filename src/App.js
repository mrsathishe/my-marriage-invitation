import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScrollNavigation from "./components/ScrollNavigation";
import smoothscroll from "smoothscroll-polyfill";
import heroImage from "./asset/hero-image.jpg";
import coupleIllustration from "./asset/couple-illustration.svg";
import hinduWeddingImage from "./asset/Hindu-wedding.jpeg";
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

  return (
    <div className="App">
      <ScrollNavigation />

      {/* Fixed Calendar Widget */}
      <div className="fixed-calendar-widget">
        <div className="calendar-container-fixed">
          <div className="calendar-month-fixed">Sep</div>
          <div className="calendar-day-fixed">04</div>
          <div className="calendar-year-fixed">2025</div>
        </div>
      </div>

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
          {/* <div className="hero-save-date">
            <div className="save-date-label">Save the Date</div>
            <div className="wedding-date-text">September 04, 2025</div>
          </div>
          <div className="hero-venue">
            📍 Gokul Tirumana Mahal A/C, Mangalam, Tiruvannamalai, TamilNadu.
          </div> */}
          <div className="countdown-title">Countdown to Our Big Day</div>
          <CountdownTimer />
          <p className="hero-quote">
            ✨ "Whatever our souls are made of, his and mine are the same."
          </p>
        </motion.div>
      </section>

      {/* Couple Section */}
      <section className="couple-section section">
        <AnimatedSection>
          <h2 className="section-title">The Happy Couple & Our Families</h2>
          <div className="couple-container">
            <AnimatedSection animation={fadeInLeft} className="couple-card">
              <h3 className="couple-name">Sathish</h3>
              <div className="couple-details">
                <p>Senior Software Engineer at Cognizant, Chennai</p>
                <p>Born and raised in Tiruvannamalai</p>
              </div>
              <div className="family-info">
                <h4 className="family-subtitle">Son of</h4>
                <div className="family-members">
                  <p>
                    <strong>Mr. Elumalai</strong>
                  </p>
                  <p>Ex. Senior Bailer, District Court Polur</p>
                  <p>
                    <strong>Mrs. TamilSelvi</strong>
                  </p>
                  <p>Village Assistant, Revenue Department, Kilpennathur</p>
                  <p className="family-location">📍 Tiruvannamalai</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Couple Animation Between Cards */}
            <div className="couple-animation">
              <div className="animation-container">
                <img
                  src={coupleIllustration}
                  alt="Beautiful couple illustration"
                  className="couple-illustration"
                />
                <div className="floating-hearts">
                  <span className="heart">💖</span>
                  <span className="heart">💝</span>
                  <span className="heart">💗</span>
                  <span className="heart">💘</span>
                </div>
              </div>
            </div>

            <AnimatedSection animation={fadeInRight} className="couple-card">
              <h3 className="couple-name">Durga</h3>
              <div className="couple-details">
                <p>Stenographer at Revenue Department (ULC), Chennai</p>
                <p>Born and raised in Vellore</p>
              </div>
              <div className="family-info">
                <h4 className="family-subtitle">Daughter of</h4>
                <div className="family-members">
                  <p>
                    <strong>Mr. Venkatesan</strong>
                  </p>
                  <p>Secretary, Coop. Credit Society, Othiyathur</p>
                  <p>
                    <strong>Mrs. Selvanayagi</strong>
                  </p>
                  <p>Ex. Typist, Family Court, Vellore</p>
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
              <AnimatedSection
                animation={fadeInLeft}
                className="event-item reception-event"
              >
                <div className="event-background">
                  <img
                    src="https://img.freepik.com/premium-vector/indian-wedding-symbol-groom-bride-clip-art-line-art-drawing-dulha-dulhan-black-white_1157715-17816.jpg"
                    alt="Indian wedding couple illustration"
                    className="event-decoration"
                  />
                </div>
                <div className="event-content">
                  <h3 className="event-name">Reception</h3>
                  <div className="event-details">
                    <p className="event-date">📅 September 3rd, 2025</p>
                    <p className="event-time">🕗 After 8:00 PM</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                animation={fadeInRight}
                className="event-item wedding-ceremony-event"
              >
                <div className="event-background">
                  <img
                    src={hinduWeddingImage}
                    alt="Traditional Hindu wedding ceremony with sacred fire"
                    className="event-decoration"
                  />
                </div>
                <div className="event-content">
                  <h3 className="event-name">Wedding Ceremony</h3>
                  <div className="event-details">
                    <p className="event-date">📅 September 4th, 2025</p>
                    <p className="event-time">🕖 7:30 AM to 9:00 AM</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="common-venue">
              <div className="venue-info">
                <div className="venue-image">
                  <img
                    src="https://content.jdmagicbox.com/v2/comp/chennai/k8/044pxx44.xx44.130814144519.b8k8/catalogue/ramani-thirumana-mahal-kovur-chennai-kalyana-mandapams-jE8qDtI8AZ.jpg"
                    alt="Gokul Tirumana Mahal A/C"
                  />
                </div>
                <div className="venue-details">
                  <h4 className="venue-title">📍 Venue</h4>
                  <p className="venue-name">Gokul Tirumana Mahal A/C</p>
                  <p className="venue-address">
                    Mangalam, Tiruvannamalai, TamilNadu
                  </p>
                </div>
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
            <div
              className="directions-grid directions-grid-custom"
              style={{
                display: "grid !important",
                gridTemplateColumns: "1fr 1fr !important",
                gridTemplateRows: "auto auto !important",
                gap: "30px !important",
              }}
            >
              <AnimatedSection
                className="direction-card tiruvannamalai-card"
                style={{
                  gridColumn: "1 !important",
                  gridRow: "1 / span 2 !important",
                }}
              >
                <div className="direction-icon">🚗</div>
                <h4 className="direction-from">From Tiruvannamalai Town</h4>
                <p className="direction-text">
                  <strong>By Car:</strong> Take{" "}
                  <strong>
                    NH 38 and Avalurpettai Rd/Tiruvannamalai - Kanchipuram Rd
                  </strong>{" "}
                  heading towards Mangalam. The venue is located on{" "}
                  <strong>Avalurpet road, opposite to EB office</strong> in
                  Mangalam.
                  <br />
                  <br />
                  <hr
                    style={{
                      width: "60%",
                      margin: "10px 0",
                      border: "0.5px solid #ddd",
                    }}
                  />
                  <br />
                  <strong>By Bus:</strong> Take bus to Avalurpettai via Mangalam
                  road, or ask for local bus to Mangalam from Tiruvannamalai bus
                  stand. Get down at Mangalam EB office stop or Mangalam and
                  walk back to Tiruvannamalai road 850 meters to reach the
                  mahal.
                </p>
                <div className="direction-distance">
                  📏 19.2 km • 26 minutes
                </div>
              </AnimatedSection>

              <AnimatedSection
                className="direction-card chennai-card"
                style={{
                  gridColumn: "2 !important",
                  gridRow: "1 !important",
                }}
              >
                <div className="direction-icon">🛣️</div>
                <h4 className="direction-from">From Chennai</h4>
                <p className="direction-text">
                  <strong>By Car:</strong> Take{" "}
                  <strong>NH 32 and NH 179B</strong> via Melmaruvathur, then
                  <strong>
                    {" "}
                    Cheyur - Vandavasi Rd/Tiruvannamalai - Kanchipuram Rd
                  </strong>{" "}
                  to reach the venue.
                </p>
                <div className="direction-distance">
                  📏 180 km • 3 hr 17 min
                </div>
              </AnimatedSection>

              <AnimatedSection
                className="direction-card vellore-card"
                style={{
                  gridColumn: "2 !important",
                  gridRow: "2 !important",
                }}
              >
                <div className="direction-icon">🛤️</div>
                <h4 className="direction-from">From Vellore</h4>
                <p className="direction-text">
                  <strong>By Car:</strong> Follow <strong>NH 38</strong> for
                  80.0 km (1 hr 42 min), then drive to your destination.
                </p>
                <div className="direction-distance">
                  📏 93.1 km • 2 hr 2 min
                </div>
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
                📍 Gokul Tirumana Mahal A/C, Mangalam, Tiruvannamalai, TamilNadu
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
                <p>Elumalai: +91 - 96779 79659</p>
                <p>Sathish: +91 - 97900 60943</p>
                <br />
                <p>
                  <strong>Bride's Side:</strong>
                </p>
                <p>Venkatesan: +91 - 94434 62615</p>
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
