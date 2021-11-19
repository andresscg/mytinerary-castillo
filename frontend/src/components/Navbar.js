import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav
      id="mainNav"
      className="navbar navbar-dark navbar-expand-md fixed-top"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="img-fluid" />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          value="Menu"
        >
          <i className="fa fa-bars"></i>
        </button>
        <div id="navbarResponsive" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item nav-link">
              <a className="nav-link fs-4 fw-bold" href="#about">
                Home
              </a>
            </li>
            <li className="nav-item nav-link">
              <a className="nav-link fs-4 fw-bold" href="#download">
                Cities
              </a>
            </li>
            <li className="nav-item nav-link text-center">
              <a className="nav-link" href="#contact">
                <i class="fas fa-user-circle fs-1"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
