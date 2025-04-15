import React from "react";

const CustomDots = ({ currentSlide, slideCount }) => {
  return (
    <>
      <div className="custom-dots">
        {Array.from({ length: slideCount }, (_, i) => (
          <span
            key={i}
            className={`custom-dot ${i === currentSlide ? "active" : ""}`}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </>
  );
};

export default CustomDots;
