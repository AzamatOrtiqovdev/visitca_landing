import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link
        to="header"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="navbar-link"
      >
        <img src={logo} alt="logo" />
      </Link>


      <ul className={styles.navbarList}>
        <li>
          <Link
            to="vision"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navbar-link"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navbar-link"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="partner"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="navbar-link"
          >
            Work
          </Link>
        </li>
      </ul>


      <Link
        to="form"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="navbar-link"
      >
        <button className={styles.navbarButton}>Contact Us</button>
      </Link>
    </nav>
  );
}
