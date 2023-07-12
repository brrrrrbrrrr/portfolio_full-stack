/* eslint-disable import/no-extraneous-dependencies */
import "./Nav.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <div className="nav-container">
      <ul className="nav-ul-container">
        <Link to="/">
          <li className={`link ${activeLink === "/" ? "active-menu" : "link"}`}>
            Accueil
          </li>
        </Link>
        <Link to="/projects">
          <li
            className={`link ${
              activeLink === "/projects" ? "active-menu" : "link"
            }`}
          >
            Projets
          </li>
        </Link>
        <Link to="/about">
          <li
            className={`link ${
              activeLink === "/about" ? "active-menu" : "link"
            }`}
          >
            À propos
          </li>
        </Link>
        <Link to="/contact">
          <li
            className={`link ${
              activeLink === "/contact" ? "active-menu" : "link"
            }`}
          >
            Contacts
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
