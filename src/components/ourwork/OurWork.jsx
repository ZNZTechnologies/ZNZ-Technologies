import React, { useEffect } from "react";
import styles from "./ourwork.module.css";
import ArrowTopHeader from "../ArrowTopHeader";
import ProjectCard from "./ProjectCard";
import "aos/dist/aos.css";
import Aos from "aos";

const OurWork = () => {
  useEffect(() => {
    console.log(window.innerWidth);
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.ourWork__container}>
      <ArrowTopHeader label={"Portfolio"} color={"#C0C0C0"} dark={true} />
      <div className={styles.ourWork__header} data-aos="fade-right">
        <h1>Our Work</h1>
        <div className={styles.work__desc}>
          <p>
            <span>At ZNZ Technologies</span> " we're not just another tech
            startup. We're the embodiment of innovation, pushing the boundaries
            of what's possible in the digital world. Our journey began with a
            simple yet powerful idea: to transform the way people interact with
            technology, making it more accessible, intuitive, and impactful."
          </p>
          <p>
            <span>What sets ZNZ Technologies apart</span> is our unwavering
            commitment to excellence. We bring together a team of visionary
            engineers, designers, and problem solvers who thrive on challenges.
            With a customer-centric approach, we tailor our solutions to meet
            your unique needs. We're not just creating software; we're crafting
            solutions that help you thrive in an ever-evolving digital
            landscape.
          </p>
        </div>
        <button>Explore our Projects</button>
      </div>
      <ProjectCard
        image={"assets/photos/dt.png"}
        direction={false}
        heading={"D&T."}
        desc={
          "Meet D&T., they sell handbags. They have a range of stylish and practical handbags for different occasions. You can find trendy totes, elegant clutches, and everyday bags that won't break the bank. Elevate your style with their affordable handbag collection."
        }
        animate={"left"}
      />
      <ProjectCard
        image={"assets/photos/dj.png"}
        direction={true}
        heading={"Fluck DJ."}
        desc={
          "Introducing Fluck DJ, a headphone seller. They offer a variety of headphones for music lovers and tech enthusiasts. From wireless to over-ear, they have options for all preferences. Find the perfect headphones to enjoy your favorite tunes or take calls on the go. Explore their collection and upgrade your audio experience with their quality products."
        }
        animate={"left"}
      />
      <ProjectCard
        image={"assets/photos/dg.PNG"}
        direction={false}
        heading={"Digmark Marketing solutions:"}
        desc={
          "Meet Digmark marketing solutions a Digital Marketing Agency. They specialize in promoting businesses online, helping them reach a wider audience and achieve their marketing goals. With their expert team, they craft digital strategies tailored to your needs. From SEO and social media marketing to content creation and paid advertising, they've got you covered. If you're looking to boost your online presence and grow your brand, they're here to make it happen. Choose them for effective and results-driven digital marketing solutions."
        }
        animate={"right"}
      />
      <ProjectCard
        image={"assets/photos/chicken.png"}
        direction={true}
        heading={"Dr. Bashir Sons Traders"}
        desc={
          "Meet Dr. Bashir Sons Traders, an expert in the poultry feed industry. They specialize in creating high-quality, nutrition-rich feeds for chickens and other poultry. With a deep understanding of the nutritional needs of birds, they provide farmers with top-notch products to promote healthy growth and optimal egg production. Their commitment to quality and excellence makes them a trusted partner for poultry enthusiasts."
        }
      />
    </div>
  );
};

export default OurWork;
