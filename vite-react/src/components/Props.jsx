import React from "react";
import "./Props.css";

const Props = ({ cards }) => {
  return (
    <div className="props-container">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imageSrc} className="card-img" alt={card.altText} />
          <div className="card-body">
            <div className="city-name">{card.cityName}</div>
            <div className="price">{card.price}</div>
            <div className="reviews">{card.reviews}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Props;
