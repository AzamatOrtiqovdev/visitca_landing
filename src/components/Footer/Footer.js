import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.wrapperFirst}>
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <img src={logo} alt="logo" />
            </Link>
            <p>
              Our innovative approach ensures seamless integration and
              unparalleled performance, driving your business forward in the
              digital age.
            </p>
          </div>

          <ul className={styles.footerList}>
            <li>
              <Link
                to="process"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Quick Menu
              </Link>
            </li>

            <li>
              <Link
                to="vision"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
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
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="process"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Work
              </Link>
            </li>

            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Blog
              </Link>
            </li>
          </ul>

          <div className={styles.thirdWrapper}>
            <h4>Subscribe to our newletter</h4>
            <p>Subscribe now to be updates with the latest features</p>
            <form className={styles.footerForm}>
              <input type="text" placeholder="Enter your Email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>

        <p className={styles.footerText}>@ 2024 PureCube All Rights Reserved</p>
      </div>
    </footer>
  );
}
