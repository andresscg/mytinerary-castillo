import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import "../styles/Navbar.css";
import usersActions from "../redux/actions/usersActions";

const Navbar = (props) => {
  //Handles navmenu on mobile devices
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [isLogged, setLogged] = useState(false);
  const dispatch = useDispatch();
  const { token, firstName, photoUrl } = useSelector((state) => state.users);

  //Handles dropdown menu
  const { buttonProps, isOpen } = useDropdownMenu(1);

  const toShow = isLogged ? (
    <li className="nav-item dropdown">
      <button className="nav-links" {...buttonProps}>
        <div
          className="user-photo"
          style={{ backgroundImage: `url(${photoUrl})` }}
        ></div>
        <i className="fas fa-angle-down"></i>
      </button>
      <div className={isOpen ? "visible" : ""} role="menu">
        <p
          className="drop-link"
          onClick={() => {
            dispatch(usersActions.signOut());
            setLogged(false);
          }}
        >
          Sign Out
        </p>
      </div>
    </li>
  ) : (
    <li className="nav-item">
      <i className="fas fa-user-circle user nav-links-icon"></i>
    </li>
  );

  useEffect(() => {
    if (token) {
      setLogged(true);
    }
  },[token]);

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
            {isLogged && (
              <li className="nav-item">
                <p className="user-name">Welcome, {firstName}</p>
              </li>
            )}
            {!isLogged && (
              <li className="nav-item">
                <Link to="/sign" className="nav-links" onClick={closeMenu}>
                  Sign In/Up
                </Link>
              </li>
            )}
            {toShow}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
