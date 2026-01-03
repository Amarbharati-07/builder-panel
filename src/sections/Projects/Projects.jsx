// Projects.jsx
import { useState } from "react";
import "./Projects.css";
import { projects } from "../../data/projectsData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All Projects");

  // Filter projects based on active tab
  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All Projects") return true;
    if (activeTab === "Residential") return project.type === "RESIDENTIAL";
    if (activeTab === "Commercial") return project.type === "COMMERCIAL";
    if (activeTab === "Completed") return project.status === "COMPLETED";
    if (activeTab === "Ongoing") return project.status === "ONGOING";
    if (activeTab === "Upcoming") return project.status === "UPCOMING";
    return true;
  });

  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* HEADER */}
        <div className="projects-header">
          <div>
            <span className="projects-tag">PORTFOLIO</span>
            <h2 className="projects-title">Our Premium Projects</h2>
          </div>
          <button className="view-all-btn">View All Projects</button>
        </div>

        {/* TABS */}
        <div className="projects-tabs">
          {["All Projects", "Residential", "Commercial", "Completed", "Ongoing", "Upcoming"].map(
            (tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "tab-btn active" : "tab-btn"}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* PROJECTS GRID */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* IMAGE */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                {/* BADGES */}
                <div className="project-badges">
                  <span className={`badge ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                  <span className={`badge ${project.type.toLowerCase()}`}>
                    {project.type}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {project.location}
                </p>
                <p className="project-sublocation">Near {project.sublocation || "City Center"}</p>

                {/* META INFO */}
                <div className="project-meta">
                  <div className="meta-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    <div>
                      <span className="meta-label">PRICE</span>
                      <span className="meta-value">{project.price}</span>
                    </div>
                  </div>

                  <div className="meta-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <div>
                      <span className="meta-label">RERA ID</span>
                      <span className="meta-value">{project.rera}</span>
                    </div>
                  </div>

                  <div className="meta-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <span className="meta-label">RERA VERIFIED</span>
                      <span className="meta-value">Scan QR...</span>
                    </div>
                  </div>
                </div>

                {/* KNOW MORE BUTTON */}
                <button className="know-more-btn">KNOW MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}