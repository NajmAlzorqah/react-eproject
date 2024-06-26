/*
  Component Overview:
  The `AboutUs` component represents the About Us section of a website,
  showcasing images and textual content describing the company's mission, values, and offerings.

  Dependencies:
  - React: Used for building user interfaces.
  - "./AboutUs.css": Stylesheet for custom styling of the About Us section.
  - Images:
    - aboutImage1, aboutImage2: Images for visual representation in the About Us section.
    - usImage: Image representing "Us" in the header.
  Note:
  - Images are imported from `/assets` directory and used to enhance visual presentation.
  - CSS classes `delay`, `hidden`, and custom styling (`./AboutUs.css`) manage visibility and layout effects.

  Usage:
  - Renders the About Us section with images, textual descriptions, and interactive elements for user engagement.
*/

import React from "react";
import aboutImage1 from "/assets/AboutUs-1.jpg";
import aboutImage2 from "/assets/AboutUs-2.jpg";
import usImage from "/assets/AboutUs-3.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="pics delay hidden">
        <div className="pic-one">
          <img src={aboutImage1} alt="" />
        </div>
        <div className="pic-two">
          <img src={aboutImage2} alt="" />
        </div>
      </div>
      <div className="text-elements hidden">
        <div className="about-us-header">
          <p className="about-text">About</p>
          <p className="us">
            Us <img src={usImage} alt="" />
          </p>
        </div>
        <div className="about-us-content-container">
          <p>We are here to make you look good.</p>
          <p>
            Our mission is to make everyone feel <i>empowered</i> and{" "}
            <i>self-confident</i> every single day.
          </p>
          <p>
            Welcome to our website! We are dedicated to providing top-quality
            products and services to our valued customers. Our team of
            experienced professionals works tirelessly to ensure customer
            satisfaction and to continuously improve our offerings. Established
            in 2024, our company has grown significantly, thanks to our
            commitment to excellence and our loyal customer base. We believe in
            transparency, integrity, and innovation, and we strive to reflect
            these values in everything we do. Thank you for visiting, and we
            look forward to serving you!
          </p>
          <button className="btn btn-hover">Read More ...</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
