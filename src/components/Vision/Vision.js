import styles from "./Vision.module.css";
import Rect from "../../assets/Rect.png";
import Rect2 from "../../assets/Rect2.png";
import Vector from "../../assets/Vector.png";

function Vision() {
  return (
    <div id="vision">
      <h2 className={styles.visionTitle}>Our Vision</h2>

      <div className={styles.visionWrapper}>

        <div>
            <ul className={styles.imgList}>
                  <li>
                        <img src={Rect} alt="img one"/>
                  </li>
                  <li>
                        <img src={Rect2} alt="img two"/>
                  </li>

                  <img src={Vector} className={styles.rectPosition} alt="img position"/>
            </ul>
        </div>

        <div>
          <h3 className={styles.infoTitle}>Empowering Innovations</h3>
          
          <p className={styles.infoText}>
            Our vision is to revolutionize the digital landscape through
            innovative solutions. We aspire to be the driving force behind
            transformative technology, empowering businesses to thrive in the
            digital era. Our commitment is to lead with creativity and
            unwavering dedication to our clients' success."
          </p>
        </div>

      </div>
    </div>
  );
}

export default Vision;
