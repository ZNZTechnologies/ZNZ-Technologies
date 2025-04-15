import React from "react";
import style from "./portfolio.module.css";
import ArrowTopHeader from "../ArrowTopHeader";
import PortfolioCard from "./PortfolioCard";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Portfolio = () => {
  return (
    <>
     
      <div className={style.portfolioContainer}>
        <img src="assets/photos/ptoy.png" alt="" className={style.ptoy} />

       <div className={style.nvbar}>
       <Link to={"/"}>
          <img
            src="assets/photos/blueLogo.png"
            alt=""
            width={153}
            height={63}
          />
        </Link>
        <Navbar />
       </div>
        <div className={style.pageTitle}>
          <ArrowTopHeader label={"Portfolio"} color={"#C0C0C0"} dark={true} />
        </div>
        <div className={style.portfolioHeader}>
          <h1>
            A <span>Treasure</span> trove of <br />
            selected projects
          </h1>
          <p>
            "Discover our range of cutting-edge tech solutions that empower your
            business for success."
          </p>
        </div>
        <div className={style.portfolioCards}>
          <PortfolioCard
            label={"Web Development"}
            pic={"assets/photos/dev.jpg"}
          />
          <PortfolioCard
            label={"Web Desiging"}
            pic={"assets/photos/design.jpg"}
          />
          <PortfolioCard
            label={"Graphic Designing"}
            pic={"assets/photos/graphic.jpg"}
          />
          <PortfolioCard
            label={"Social Media Marketing"}
            pic={"assets/photos/media.jpg"}
          />
          <PortfolioCard
            label={"Lead Generation "}
            pic={"assets/photos/lead.webp"}
          />
          <PortfolioCard
            label={"Video Editing"}
            pic={"assets/photos/edit.jpg"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
