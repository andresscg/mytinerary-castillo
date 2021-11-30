import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import "../styles/Navbar.css";  

const Navbar = () => {
  //Handles navmenu on mobile devices
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  //Handles dropdown menu
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src="/assets/logo.svg" alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cities" className="nav-links" onClick={closeMenu}>
                Cities
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-links" {...buttonProps}>
                <i className="fas fa-user-circle user"></i>
                <i className="fas fa-angle-down"></i>
              </button>
              <div className={isOpen ? 'visible' : ''} role='menu'>
                <Link {...itemProps[0]} to='/login' className="drop-link">Log In</Link>
                <Link {...itemProps[1]} to='signup' className="drop-link">Sign Up</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
