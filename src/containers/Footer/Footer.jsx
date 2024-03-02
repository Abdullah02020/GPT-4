import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <><div className="footer section__padding">
      <div className="footer-header">
        <h1 className="gradient__text">
          Do you want to step in to the <br /> future before others
        </h1>
        <a href="#">Request Early Access</a>
      </div>

      <div className="footer-links">
        <div className="footer-logo">
          <a href="#home">GPT-4</a>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-link flex">
          <div className="box">
            <p>links</p>
            <ul>
              <li><a href="#">Overons</a></li>
              <li><a href="#">Social Media</a></li>
              <li><a href="#">Counters</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="box">
            <p>Company</p>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="box">
            <p>Get in touch</p>
            <ul>
              <li><a href="#">Crechterwoord <br /> K12 182 DK Alknjkcb</a></li>
              <li><a href="#">085-132567</a></li>
              <li><a href="#">info@payme.net</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div><div className="footer-end">
        <p>© 2024 GPT-4. All rights reserved.</p>
      </div></>
  );
};

export default Footer;
