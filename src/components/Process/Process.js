import React from 'react'
import styles from "./Process.module.css"
import processOne from "../../assets/processOne.png"
import processTwo from "../../assets/processTwo.png"
import processThree from "../../assets/processThree.png"
import arrow from "../../assets/arrow.png";

export default function Process() {
  return (
    <div id='process'>
      <h3 className={styles.procesTitle}>Simple Working Process</h3>

      <ul className={styles.processList}>
            <li className={styles.processItem}>
                  <img src={processOne} alt='process one'/>

                  <div>
                        <p className={styles.processText}>01</p>
                        <p className={styles.processTextInfo}>Fill Out The Form</p>
                  </div>
            </li>
            <li className={styles.processItem}>
                  <img src={processTwo} alt='process one'/>

                  <div>
                        <p className={styles.processText}>02</p>
                        <p className={styles.processTextInfo}>Meet With A Specialist</p>
                  </div>
            </li>
            <li className={styles.processItem}>
                  <img src={processThree} alt='process one'/>

                  <div>
                        <p className={styles.processText}>03</p>
                        <p className={styles.processTextInfo}>Start Project</p>
                  </div>
            </li>

            <img src={arrow} alt='arrow' className={styles.left}/>
            <img src={arrow} alt='arrow' className={styles.center}/>
            <img src={arrow} alt='arrow' className={styles.right}/>

      </ul>
    </div>
  )
}
