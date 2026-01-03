// src/pages/Experience/Experience.jsx - WITHOUT ROUTING
import { useState } from "react";
import "./Experience.css";
import Navbar from "../../components/Navbar";

export default function Experience({ navigateTo }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for your feedback!");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="experience-page">
      <Navbar navigateTo={navigateTo} currentPage="experience" />

      {/* HERO SECTION */}
      <section className="experience-hero">
        <div className="experience-hero-content">
          <h1>Customer Experience</h1>
          <p>
            Our commitment to excellence is reflected in the trust and
            satisfaction of our residents.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="testimonial-header">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Rajesh Kumar"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3>Rajesh Kumar</h3>
                <p>Happy Homeowner</p>
              </div>
            </div>
            <p className="testimonial-text">
              "The entire experience of buying from Luxe Estates was
              exceptional. The team was professional, transparent, and made the
              process seamless. Highly recommended!"
            </p>
            <a href="#" className="video-link">
              Watch Video Testimonial →
            </a>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="testimonial-header">
              <img
                src="https://i.pravatar.cc/150?img=45"
                alt="Priya Sharma"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3>Priya Sharma</h3>
                <p>Project Manager</p>
              </div>
            </div>
            <p className="testimonial-text">
              "Living in Grand Horizon has changed our lifestyle. The amenities
              are world-class and the community is amazing. Best investment
              ever!"
            </p>
            <a href="#" className="video-link">
              Watch Video Testimonial →
            </a>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="testimonial-header">
              <img
                src="https://i.pravatar.cc/150?img=33"
                alt="Amit Patel"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3>Amit Patel</h3>
                <p>Business Owner</p>
              </div>
            </div>
            <p className="testimonial-text">
              "Skyline Towers is the perfect place for our growing business. The
              infrastructure and connectivity are unmatched. Looking forward to
              the project completion!"
            </p>
            <a href="#" className="video-link">
              Watch Video Testimonial →
            </a>
          </div>

          {/* Testimonial 4 */}
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="testimonial-header">
              <img
                src="https://i.pravatar.cc/150?img=27"
                alt="Sneha Reddy"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3>Sneha Reddy</h3>
                <p>Interior Designer</p>
              </div>
            </div>
            <p className="testimonial-text">
              "The attention to detail in every corner of Serenity Meadows is
              remarkable. It's not just a home, it's a masterpiece. Proud to be
              a resident!"
            </p>
            <a href="#" className="video-link">
              Watch Video Testimonial →
            </a>
          </div>

          {/* Testimonial 5 */}
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="testimonial-header">
              <img
                src="https://i.pravatar.cc/150?img=68"
                alt="Vikram Singh"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3>Vikram Singh</h3>
                <p>Software Engineer</p>
              </div>
            </div>
            <p className="testimonial-text">
              "Urban Heights offers the perfect blend of luxury and
              convenience. The location is prime and the construction quality
              is top-notch. Worth every penny!"
            </p>
            <a href="#" className="video-link">
              Watch Video Testimonial →
            </a>
          </div>

          {/* Testimonial 6 */}
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="testimonial-header">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Meera Joshi"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3>Meera Joshi</h3>
                <p>Doctor</p>
              </div>
            </div>
            <p className="testimonial-text">
              "The customer service at Luxe Estates is unparalleled. They
              guided us through every step and ensured we got our dream home.
              Highly satisfied!"
            </p>
            <a href="#" className="video-link">
              Watch Video Testimonial →
            </a>
          </div>
        </div>
      </section>

      {/* FEEDBACK FORM SECTION */}
      <section className="feedback-section">
        <div className="feedback-container">
          <h2>We Value Your Feedback</h2>
          <p className="feedback-subtitle">
            Have you visited one of our properties recently? We'd love to hear
            from you.
          </p>

          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="I'm interested in..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Happy Families</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </section>
    </div>
  );
}