import React from "react";
import styles from "./aboutpage.module.css";
import QuoteSlider from "../QuoteSlider";
import { Link } from "react-router-dom";

const CeoSection = () => {
  const slides = [
    "Sher Alam Baytani, Founder & CEO, Be thankful to Almighty for every thing.",
    "Sher Alam Baytani, Founder & CEO, Be thankful to Almighty for every thing.",
    "Sher Alam Baytani, Founder & CEO, Be thankful to Almighty for every thing.",
    "Sher Alam Baytani, Founder & CEO, Be thankful to Almighty for every thing.",
    "Sher Alam Baytani, Founder & CEO, Be thankful to Almighty for every thing.",
    "Sher Alam Baytani, Founder & CEO, Be thankful to Almighty for every thing.",
  ];
  return (
    <div className={styles.ceo__container}>
      <div className={styles.ceo__typo} data-aos="fade-right">
        <h1>
          Stronger than <br />
          a Team, a <br />
          <span>Family</span>
        </h1>
        <p>
          Our CEO at ZNZ Technologies is the visionary leader, steering our ship
          through the digital waves, guiding our crew to new horizons, and
          inspiring us to achieve greatness with clarity and purpose.
        </p>
        <button>
          <Link to="/team" style={{ textDecoration: "none", color: "white" }}>
            Meet the team
          </Link>
        </button>
      </div>
      <div className={styles.ceoImageArea}>
        <img src="assets/photos/ceo.png" alt="" data-aos="zoom-in-down"/>
        <div>
          <span className={styles.sliderBack}>
            <QuoteSlider slides={slides} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CeoSection;
