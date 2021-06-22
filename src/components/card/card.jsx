import React from "react";
import "./card.css";
function Card({ imgSrc, cardTitle, cardSubTitle, altText }) {
  return (
    <div className="wrapper-statistics-card">
      <div className="statistics-card">
        <div className="statistics-card-img">
          <img src={imgSrc} alt={altText} />
        </div>
        <div className="wrapper-card-text">
          <div className="statistics-card-title">
            <h5>{cardTitle}</h5>
          </div>
          <div className="statistics-card-text">
            <p className="text-gray">{cardSubTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
