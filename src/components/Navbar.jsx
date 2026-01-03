import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (e, menuName) => {
    e.preventDefault();
    setActiveMenu(menuName);
    console.log('Menu clicked:', menuName);
  };

  const handleCallClick = () => {
    console.log('Call button clicked');
    // window.location.href = 'tel:+919990000000';
  };

  const handleEnquireClick = () => {
    console.log('Enquire button clicked');
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="brand">LUXE ESTATES</div>

      <nav className="menu">
        <a 
          href="#home" 
          onClick={(e) => handleMenuClick(e, "HOME")} 
          className={activeMenu === "HOME" ? "active" : ""}
        >
          HOME
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleMenuClick(e, "PROJECTS")}
          className={activeMenu === "PROJECTS" ? "active" : ""}
        >
          PROJECTS
        </a>
        <a 
          href="#experience" 
          onClick={(e) => handleMenuClick(e, "EXPERIENCE")}
          className={activeMenu === "EXPERIENCE" ? "active" : ""}
        >
          EXPERIENCE
        </a>
        <a 
          href="#news" 
          onClick={(e) => handleMenuClick(e, "NEWS")}
          className={activeMenu === "NEWS" ? "active" : ""}
        >
          NEWS
        </a>
        <a 
          href="#careers" 
          onClick={(e) => handleMenuClick(e, "CAREERS")}
          className={activeMenu === "CAREERS" ? "active" : ""}
        >
          CAREERS
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleMenuClick(e, "CONTACT")}
          className={activeMenu === "CONTACT" ? "active" : ""}
        >
          CONTACT
        </a>
      </nav>

      <div className="actions">
        <button className="call-btn" onClick={handleCallClick}>
          Call: +91 999 000 0000
        </button>
        <button className="enquire-btn" onClick={handleEnquireClick}>
          Enquire Now
        </button>
      </div>
    </header>
  );
}