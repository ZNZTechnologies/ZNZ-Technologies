import React, { useEffect } from "react";
import styles from "./ourwork.module.css";
import "aos/dist/aos.css";
import Aos from "aos";

const ProjectCard = ({ image, direction, heading, desc, animate }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        data-aos={`fade-${animate}`}
        className={styles.projectCard__container}
        style={{ flexDirection: direction ? "row-reverse" : "" }}
      >
        <div className={styles.cardHeadings}>
          <h1>{heading}</h1>
          <p>{desc}</p>
          <button>Expore our Pojects</button>
        </div>
        <div className={styles.cardImage}>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
