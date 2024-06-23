import React, { useState } from "react";
import VisitorCount from "../VisitorCount/VisitorCount"; // Import VisitorCount component
import logo from "/assets/light-logo-icon.png"; // Import logo image
import "./Navbar.css"; // Import CSS file for styling

const Navbar = () => {
  // State to manage whether the navigation menu is open or closed
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to handle smooth scrolling to section on clicking navigation links
  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 70;
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to toggle the mobile navigation menu
  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close the mobile navigation menu
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <section>
      <nav className="navigation-bar">
        {/* Hamburger menu icon for mobile navigation */}
        <div className="burger-menu">
          <svg
            aria-controls="primary-navigation"
            aria-expanded={isNavOpen}
            className={`mobile-nav-toggle ham hamRotate ham8 ${
              isNavOpen ? "active" : ""
            }`}
            viewBox="0 0 100 100"
            width="80"
            onClick={toggleMenu}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
        </div>

        {/* Navigation links */}
        <div className={`links ${isNavOpen ? "open" : ""}`}>
          <ul
            id="primary-navigation"
            data-visible={isNavOpen}
            className="primary-navigation menu"
          >
            {/* Navigation items with smooth scroll onClick */}
            <li>
              <a href="#home-page" onClick={smoothScroll}>
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" onClick={smoothScroll}>
                About&nbsp;us
              </a>
            </li>
            <li>
              {/* Dropdown menu for Education */}
              <div className="education">
                <a href="#patient-education" onClick={smoothScroll}>
                  Education
                </a>
                <div className="drop-down-menu">
                  <a href="#patient-education" onClick={smoothScroll}>
                    . Patient education
                  </a>
                  <a href="#professional" onClick={smoothScroll}>
                    . Professional education
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a href="#products" onClick={smoothScroll}>
                Products
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={smoothScroll}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#research" onClick={smoothScroll}>
                Research
              </a>
            </li>
            <li>
              <a href="#contact" onClick={smoothScroll}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Left container with logo and VisitorCount component */}
        <div className="left-container">
          <div className="logo">
            <a href="./index.html">
              <img src={logo} alt="logo" />
              <p>
                <span>Belleville</span>Dental
              </p>
            </a>
          </div>
          {/* Include VisitorCount component here */}
          <VisitorCount />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;