import React from "react";
import style from "./team.module.css";

const TitleCard = ({title,label,desc}) => {
  return (
    <div className={style.titleCard} data-aos="fade-right">
      <h1>
        {label} <br />
        <span>{title}</span>
      </h1>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default TitleCard;
