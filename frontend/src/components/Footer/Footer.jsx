import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    // Footer container
    <div className="footer" id="footer">
      <div className="footer-content">
        {/* Left section of the footer */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="" /> {/* Logo */}
          <p>
            {/* Footer description */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            maiores quam. Blanditiis aliquam, cupiditate minima fuga optio
            corrupti voluptatum tempora ratione eum tempore repellat quos error
            possimus esse fugit pariatur.
          </p>
          {/* Social media icons */}
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        {/* Center section of the footer */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            {/* Footer navigation links */}
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right section of the footer */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            {/* Contact information */}
            <li>+233-54-247-585</li>
            <li>contact@turbo.com</li>
          </ul>
        </div>
      </div>
      {/* Horizontal line */}
      <hr />
      {/* Copyright information */}
      <p className="footer-copyright">
        Copyright 2024 Turbo.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
