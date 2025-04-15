import React from "react";
import styles from "./aboutpage.module.css";
import ArrowTopHeader from "../ArrowTopHeader";
import CeoSection from "./CeoSection";
import CompanyValues from "./CompanyValues";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.first__section}>
        <div className={styles.logoAboutUs}>
          <img
            src="assets/photos/blueLogo.png"
            alt=""
            width={200}
            height={83}
          />
        </div>
        <div className={styles.about__header}>
          <ArrowTopHeader label={"About us"} color={"#C0C0C0"} dark={true} />
          <div className={styles.about__innerheader} >
            <div className={styles.about__typo} data-aos="fade-right">
              <h1>
                <span>ZNZ Technologies</span> 
              </h1>
              <div>
                <p>
                  ZNZ Technologies is passionate about assisting companies in
                  being successful online. Our four main areas of expertise are
                  lead generation, web development, graphic design, and digital
                  marketing.
                </p>
                
              </div>
              <button>View our capablities</button>
            </div>
            <div className={styles.imageMain} data-aos="fade-left">
            <div className={styles.imgae} data-aos="fade-left">
              <img src="assets/photos/about-back.png" alt="" />
              <div>
                <div className="footer__rightSide">
                  {/* <div className="social__icons">
                    <img src="assets/photos/darkfb.png" alt="" />
                    <img src="assets/photos/darkinsta.png" alt="" />
                    <img src="assets/photos/darktwitter.png" alt="" />
                  </div> */}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* second SECTION  */}
      <div className={styles.digitalExperience} >
        <div className={styles.digitalTypo}  data-aos="fade-right">
          <span>
          <ArrowTopHeader label={"We strive to introduce brands in a captivating way people can’t resist."} color={"#ffff"} dark={false}  />
          </span>
          {/* <span>
            We strive to introduce brands in a captivating way people can’t resist.
          </span> */}
        </div>
        <h1 className={styles.digitalBigHead} data-aos="fade-right">
          A digital <br />
          experienceagency fueled <br /> on talent,artistic flair <br />{" "}
          andunconventional ideas
        </h1>
      </div>
      {/* ceo section  */}
      <CeoSection />
      <CompanyValues />
      <Footer />
    </div>
  );
};

export default AboutPage;
