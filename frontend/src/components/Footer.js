import React from "react";
import "./Footer.css";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-container">
      <img
        src="/assets/logo_small_icon_only.png"
        alt="Logo"
        className="footer-logo"
      />
      <h3 className="footer-text">MyTinerary | 2021</h3>
      <div className="footer-links">
        <Link to="/" className="footer-links-item">
          Home
        </Link>
        <Link to="/cities" className="footer-links-item">
          Cities
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
