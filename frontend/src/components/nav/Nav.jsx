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
        <li>
          <Link
            to="/"
            className={`link ${activeLink === "/" ? "active-menu" : "link"}`}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`link ${
              activeLink === "/projects" ? "active-menu" : "link"
            }`}
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`link ${
              activeLink === "/about" ? "active-menu" : "link"
            }`}
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`link ${
              activeLink === "/contact" ? "active-menu" : "link"
            }`}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
