import React from "react";
import styles from "./aboutus.module.css";
import ArrowTopHeader from "../ArrowTopHeader";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs__container}>
      <ArrowTopHeader label={"About us"} color={"#C0C0C0"} dark={true} />
      <div className={styles.aboutUs__header}>
        <h1>
          We pour <br />
          our 🧡 into <br />
          every design
        </h1>
        <div className={styles.about__desc}>
          <p>
            <span>We put </span> our users at the center of our design process.
            Understanding their needs, preferences, and pain points is our first
            and foremost principle. Every design decision we make aims to
            improve the user's experience and add value to their lives.
          </p>
          <p>
            <span>Design</span>  is the means by which we bring ideas
            to life because innovation is in our DNA.We think great design
            enhances the user's journey by being both aesthetically pleasing and
            functional.Our design philosophy is based on innovation that is
            user-centered, elegant, and simple.
          </p>
        </div>
        <button>Explore our Projects</button>
      </div>
    </div>
  );
};

export default AboutUs;
