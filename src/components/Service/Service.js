import React from "react";
import styles from "./Service.module.css";
import serviceLogoOne from "../../assets/armchair.svg";
import serviceLogoTwo from "../../assets/airplane.svg";
import serviceLogoThree from "../../assets/blog.svg";
import serviceLogoFour from "../../assets/busket.svg";

export default function Service() {
  return (
    <div id="service">
      <h3 className={styles.serviceTitle}>Explore Our Services:</h3>

      <ul className={styles.serviceList}>
        <li className={styles.serviceItem}>
          <img src={serviceLogoOne} alt="service logo one" />

          <div className={styles.serviceInfo}>
            <h3>Booking</h3>
            <p>
              Find and book the perfect accommodation tailored to your needs,
              whether it’s a weekend escape or an extended vacation.
            </p>
          </div>
        </li>

        <li className={styles.serviceItem}>
          <img src={serviceLogoTwo} alt="service logo one" />

          <div className={styles.serviceInfo}>
            <h3>Transport</h3>
            <p>
              Arrange convenient transport options to take you wherever your
              journey leads.
            </p>
          </div>
        </li>

        <li className={styles.serviceItem}>
          <img src={serviceLogoThree} alt="service logo one" />

          <div className={styles.serviceInfo}>
            <h3>Travel Blog & Community</h3>
            <p>
              Stay informed with expert travel tips, destination highlights, and
              inspiration from our vibrant community of travel enthusiasts and
              bloggers.
            </p>
          </div>
        </li>

        <li className={styles.serviceItem}>
          <img src={serviceLogoFour} alt="service logo one" />

          <div className={styles.serviceInfo}>
            <h3>Buy and Rent</h3>
            <p>
              Looking for a long-term stay? Explore our options for purchasing
              or renting vacation homes and properties across scenic
              destinations.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
