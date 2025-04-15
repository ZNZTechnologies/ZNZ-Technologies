import React from "react";
import ArrowTopHeader from "../ArrowTopHeader";
import styles from "./team.module.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TeamMembers from "./TeamMembers";
const Team = () => {
  return (
    <div className={styles.team__container}>
      <Navbar />
      <div className={styles.logo}>
        <img src="assets/photos/blueLogo.png" alt="" width={153} height={63} />
      </div>
      <div className={styles.teamMainHeader}>
        <ArrowTopHeader label={"The Team"} color={"#C0C0C0"} dark={true} />
        <div className={styles.team__header}>
          <h1>
            We are <br />
            <span>ZNZ Family</span>
          </h1>
          <p>
            Here at ZNZ Technologies we're more than a team; we're a digital
            family, united by innovation, bound by code, and driven by the
            shared dream of bringing your ideas to life in the digital world.
          </p>
          <button>View our capablities</button>
        </div>
      </div>
      <TeamMembers />
      <Footer />
    </div>
  );
};

export default Team;
