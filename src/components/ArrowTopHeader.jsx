import React from "react";
import ArrowDown from "../icons/svgs/ArrowDown.svg";
import DarkArrowDown from "../icons/svgs/darkArrow.svg";

const ArrowTopHeader = ({ label, color, dark }) => {
  return (
    <div className="arrowSection">
      <span style={{ color: color }}>{label}</span>
      {dark ? (
        <img src={DarkArrowDown} alt="" />
      ) : (
        <img src={ArrowDown} alt="arrow" />
      )}
    </div>
  );
};

export default ArrowTopHeader;
