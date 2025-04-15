import React from "react";
import ArrowTopHeader from "../ArrowTopHeader";
import styles from "./aboutpage.module.css";

const CompanyValues = () => {
  return (
    <div className={styles.companyValueContainer}>
      <ArrowTopHeader label={"Company Values"} color={"#C0C0C0"} dark={true} />
      <div className={styles.companyValues}>
        <div className={styles.singleValue} data-aos="fade">
          <h1>
            Innovation <br />
            <span>Excellence </span>
          </h1>
          <p>
            A company value called "Innovation Excellence" emphasizes the
            dedication to fostering a culture of ongoing innovation, creativity,
            and the pursuit of ground-breaking concepts. It entails motivating
            staff members to adopt unconventional viewpoints, question received
            wisdom, and persistently look for better methods and approaches.
          </p>
          <button>Explore services</button>
        </div>
        <div className={styles.singleValue} data-aos="fade">
          <h1>
            Customer <br />
            <span>Satisfaction</span>
          </h1>
          <p>
            At ZNZ Technologies, we are driven by a deep commitment to ensuring
            our customers' satisfaction at every step of their journey with us.
            We believe that the happiness and success of our customers are a
            true measure of our own success.
          </p>
          <button>Explore services</button>
        </div>
        <div className={styles.singleValue} data-aos="fade">
          <h1>
            Team <br />
            <span>Collaboration</span>
          </h1>
          <p>
            At ZNZ Technologies, we understand that the power of teamwork and
            collaboration is the cornerstone of our success. We believe that
            when diverse minds come together, extraordinary things can happen.
          </p>
          <button>Explore services</button>
        </div>
        <div className={styles.singleValue} data-aos="fade-in">
          <h1>
            Personal <br /> 
            <span>Growth </span>
          </h1>
          <p>
            At ZNZ Technologies, we are committed to nurturing not only the
            success of our organization but also the personal growth and
            well-being of our valued team members. We believe that when our
            employees thrive, our company thrives.
          </p>
          <button>Explore services</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyValues;
