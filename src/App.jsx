// src/App.jsx - WITHOUT ROUTING
import { useState } from "react";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Pass navigation function to pages via props
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-wrapper">
      {/* Render page based on state */}
      {currentPage === "home" && <Home navigateTo={navigateTo} />}
      {currentPage === "experience" && <Experience navigateTo={navigateTo} />}
      
      {/* Footer shows on all pages */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;