import React from "react";
import styles from "./thisus.module.css";
import ArrowTopHeader from "../ArrowTopHeader";
import SocialFeed from "./SocialFeed";
import { Link } from "react-router-dom";

const ThisUs = () => {
  return (
    <React.Fragment>
      <div className={styles.thisForUs__container} data-aos="fade-left">
        <div className={styles.forUs__innerContainer}>
          <ArrowTopHeader label={"This is Us"} color={"#C0C0C0"} dark={true} />
          <div className={styles.innerContainer__headings}>
            <h1>
              We are creative <br /> people with big <br /> dreams
            </h1>
            <p>
              We are dedicated builders of extraordinary solutions, dreamers of
              the future, and architects of innovation. We are creating a future
              where possibilities are limitless with unrelenting passion and
              unwavering dedication. Join us on this amazing journey where your
              story and ours are intertwined and where, together, we are shaping
              the world of limitless potential.
            </p>
            <button>
              <Link to={"/about"} style={{textDecoration:"none",color:"white"}}>Get to know us</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.highFive__container}>
        <ArrowTopHeader label={"High Five"} color={"#C0C0C0"} dark={true} />
        <div className={styles.leads__container} data-aos="fade-down">
          <div className={styles.leads__headings}>
            <h1>Leads Generations</h1>
            <p>
              We are experts in the art of finding, luring, and developing
              leads. We are your partners in fostering growth, enhancing
              conversion rates, and ensuring that your sales pipeline is filled
              with qualified prospects thanks to data-driven strategies and
              tried-and-true methods.
            </p>
            <span>
              "We leverage cutting-edge technologies and creative strategies to
              transform opportunities into loyal customers, driving your
              success."
            </span>
            <div>
              <button>see more</button>
              <img src="assets/photos/rightArrow.png" alt="" />
            </div>
          </div>
          <img src="assets/photos/202.png" alt="" />
        </div>
        <img src="assets/photos/3.png" alt="" className={styles.imgAbslt} />
      </div>
      <SocialFeed />
    </React.Fragment>
  );
};

export default ThisUs;
