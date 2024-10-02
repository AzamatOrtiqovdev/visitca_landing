import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-scroll";
import colabOne from "../../assets/colabOne.png";
import colabTwo from "../../assets/colabTwo.png";

export default function Main() {
  return (
    <main className={styles.main} id="main">
      <h2 className={styles.mainTitle}>
        Welcome to VISITCA – Your Ultimate Travel Companion!
      </h2>

      <p className={styles.mainDescription}>
        Experience the future of travel – seamless, simple, and all in one
        place. Get started now and discover your next adventure with VISITCA
      </p>

      {/* <Link to="service" spy={true} smooth={true} offset={50} duration={500}>
        <button className={styles.mainButton}>
          <span>Explore More</span>
        </button>
      </Link> */}

      {/* <div className={styles.colabrators}>
        <img src={colabOne} alt="pure cube" />
        <img src={colabTwo} alt="visitca" />
      </div> */}
    </main>
  );
}
