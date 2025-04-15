import React from "react";
import Footer from "../Footer";
import AboutUs from "../aboutus/AboutUs";
import OurWork from "../ourwork/OurWork";
import Service from "../servicee/Service";
import SliderCard from "../slider-card/SliderCard";
import ThisUs from "../thisIsForUs/ThisUs";
import styles from "./home.module.css";
const HomePge = () => {
  return (
    <div className={styles.main_homePage}>
      {/* <SliderComp/> */}
      <div className="home__back">
        <div className="main__overlay">
          <SliderCard />
        </div>
      </div>
      <OurWork />
      <AboutUs />
      <Service />
      <ThisUs />
      <Footer />
    </div>
  );
};

export default HomePge;
