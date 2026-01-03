// src/pages/Home/Home.jsx
import "./Home.css";
import Navbar from "../../components/Navbar";
import Projects from "../../sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source
            src="https://videos.pexels.com/video-files/12731888/12731888-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">
          <span className="tag">ARCHITECTURAL MASTERPIECES</span>

          <h1>
            Designing <br />
            <span>Your Legacy</span>
          </h1>

          <p>
            We create spaces that transcend the ordinary. Experience the perfect
            harmony of luxury, comfort, and sustainable design.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Explore Projects</button>
            <button className="btn-outline">Contact Us</button>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ================= ABOUT / INNOVATION SECTION ================= */}
      <section className="about-section">
        <div className="about-container">
          {/* LEFT SIDE - IMAGE & EXPERIENCE BOX */}
          <div className="about-left">
            <div className="about-image-wrapper">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury Interior"
                className="about-image"
              />
              
              <div className="experience-box">
                <h3>25+</h3>
                <p>Years of Building<br/>Excellence</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="about-right">
            <h2 className="about-title">
              Where Innovation Meets <span className="gold-text">Elegance</span>
            </h2>

            <p className="about-description">
              At Luxe Estates, we don't just build structures; we craft lifestyles. 
              Our commitment to quality, attention to detail, and architectural 
              innovation has established us as the premier luxury developer in the region.
            </p>

            {/* FEATURES GRID */}
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h4>Award Winning</h4>
                <p>Recognized globally for design excellence.</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </div>
                <h4>Premium Spaces</h4>
                <p>Over 5 million sqft of luxury developed.</p>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h4>On-Time Delivery</h4>
                <p>We value your time as much as you do.</p>
              </div>
            </div>

            <a href="#" className="read-more">
              Read our story →
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <Projects />
    </>
  );
}