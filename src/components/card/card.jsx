import React from "react";
import "./card.css";
function Card({ imgSrc, cardTitle, cardSubTitle, altText }) {
  return (
    <div className="statistics-card">
      <div className="statistics-card-img">
        <img src={imgSrc} alt={altText} />
      </div>
      <div className="wrapper-card-text">
        <div className="statistics-card-title">
          <h5>{cardTitle}</h5>
        </div>
        <div className="statistics-card-text">
          <h4 className="text-gray">{cardSubTitle}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
