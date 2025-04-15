import React from "react";
import styles from "./slidercard.module.css";
import Navbar from "../Navbar";
import ArrowTopHeader from "../ArrowTopHeader";
const SliderCard = () => {
  return (
    <>
      
        <Navbar showLogo={true} />
      

      <div className={styles.sliderCardMainContainer}>
        <div className={styles.headingContainer}>
          <ArrowTopHeader label={"A Place Where"} dark={false} />
          <div className={styles.headingSection}>
            <h1>The power of fantasy inspires brand love</h1>
          </div>
        </div>
        <div className={styles.socialIconContainer}>
          <div className={styles.sliderButton}>{/* slider scroll btns  */}</div>

          <div className={styles.socialIcons}>
            {/* <div className={styles.getInTouch}>
              <img src="assets/photos/chat-icon.png" alt="" />
              <span>Get in touch</span>
            </div> */}
            {/* <img src="assets/photos/fb.png" alt="" />
            <img src="assets/photos/insta.png" alt="" />
            <img src="assets/photos/twitter.png" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
