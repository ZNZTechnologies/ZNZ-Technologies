import React, { useEffect } from "react";
import styles from "./service.module.css";
import ArrowTopHeader from "../ArrowTopHeader";
import "aos/dist/aos.css";
import Aos from "aos";



const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.services__container}>
      <ArrowTopHeader label={"Services"} color={"#C0C0C0"} dark={true} />
      <div className={styles.service__headerContainer}>
        <h1 data-aos="fade-right">
          <span>360</span> of Digital <br /> Services <br /> Expertise
        </h1>
        <div className={styles.services__desc} data-aos="fade-left">
          <p>
            <span>360 Degrees</span> "of Expertise in Digital Services: Our
            expertise is navigating the digital environment. We cover every
            angle, from web creation to digital marketing. With the broad range
            of skills on our team, you won't simply be a participant in the
            digital world; you'll be a leader in it.
          </p>
          <button>Find out Now</button>
        </div>
      </div>
      {/* services  */}
      <div className={styles.singleServices__container}>
        <div className={styles.singleServices}>
          <div className={styles.service} data-aos="flip-left">
            <div className={styles.serviceTitle}>
              <h4>
                <span>UI/UX</span> Designing
              </h4>
            </div>
            <img src="assets/photos/serviceImage1.png" alt="" />
            <div className={styles.serviceDesc}>
              <h1>
                Creating great <br />{" "}
                <span>
                  Website Experience
                </span>
              </h1>
              <p>
                We give digital canvases life when creativity and technology
                converge. Our web design professionals create remarkable user
                experiences by telling stories in code and color. We are
                committed to creating websites that fascinate, engage, and make
                a lasting impression, from responsive layouts to straightforward
                navigation.
              </p>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------- */}
          <div className={styles.service} data-aos="flip-left">
            <div className={styles.serviceTitle}>
              <h4>
                <span>Web</span> Development
              </h4>
            </div>
            <img src="assets/photos/serviceImage2.png" alt="" />
            <div className={styles.serviceDesc}>
              <h1>
                Building a  memorable <br /> <span>websites</span>
              </h1>
              <p>
                Web development is at the heart of our prowess in the digital
                realm. Visions are transformed into dynamic websites and
                applications by our team of coding geniuses. We use the most
                recent technology with an uncompromising dedication to
                functionality and innovation to build responsive, secure, and
                scalable digital solutions.
              </p>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------- */}
          <div className={styles.service} data-aos="flip-left">
            <div className={styles.serviceTitle}>
              <h4>
                Digital <span>Marketing</span>
              </h4>
            </div>
            <img src="assets/photos/serviceImage3.png" alt="" />
            <div className={styles.serviceDesc}>
              <h1>
                
                quantitative data with <br /> qualitative <br /> <span>insights</span>
              </h1>
              <p>
                We guide you through the always changing online marketing
                environments like a compass in the digital desert. Our plans are
                informed by data, and our creativity is limitless and
                unyielding. From social media savvy to SEO optimization, we
                promote interaction, visibility, and expansion. Let's use the
                power of the digital age to connect with your audience, convey
                your brand's narrative, and produce outstanding results.
              </p>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------- */}
          <div className={styles.service} data-aos="flip-left">
            <div className={styles.serviceTitle}>
              <h4>
                <span>Lead</span> Generations
              </h4>
            </div>
            <img src="assets/photos/serviceImage4.png" alt="" />
            <div className={styles.serviceDesc}>
              <h1>
                <span>
                "Unlocking " Your 
                </span>{" "}
                Path to Success,  <br /> One Lead at a Time.<br /> 
              </h1>
              <p>
                We are aware that any business depends on leads. Our lead
                generation strategies are painstakingly designed to locate,
                entice, and cultivate prospective clients. We enable your
                business to expand through data-driven strategies, engaging
                content, and focused campaigns. Let us work together to increase
                your audience, increase sales, and guarantee a consistent flow
                of high-quality leads that will fuel your success.
              </p>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Service;
