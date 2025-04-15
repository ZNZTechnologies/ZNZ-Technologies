import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CustomPagination from "./homepage/CustomPagination";
import SliderCard from "./slider-card/SliderCard";

const SliderComp = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    appendDots: (dots) => <CustomPagination {...dots} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider__main__container">
      <Slider {...settings}>
        <div className="slider__container">
          <div className="slide-content">
            <SliderCard />
          </div>
          <video autoPlay loop muted>
            <source src="/assets/vedios/flower.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="slider__container">
          <div className="slide-content">
            <SliderCard />
          </div>
          <video autoPlay loop muted>
            <source src="/assets/vedios/bird.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="slider__container">
          <div className="slide-content">
            <SliderCard />
          </div>
          <video autoPlay loop muted>
            <source src="/assets/vedios/heart.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
