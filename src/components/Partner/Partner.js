import React from "react";
import styles from "./Partner.module.css";
import partner from "../../assets/partner.png";

export default function Partner() {
  return (
    <div id="partner">
      <h3 className={styles.partnerTitle}>For Partners</h3>

      <div className={styles.partner}>
        <div className={styles.partnerInfo}>
          <h3>Partner with Us for Your Digital Success</h3>

          <p>
            At Visitca, we understand that every business is unique. That's why
            we focus on delivering customized digital solutions that match your
            specific needs and vision. Whether you’re a startup seeking to
            disrupt the market or an established enterprise aiming to optimize
            operations, we’re here to bring your goals to life.
          </p>
        </div>

        <div className={styles.partnerImg}>
          <img src={partner} alt="partner" />
        </div>
      </div>
    </div>
  );
}
