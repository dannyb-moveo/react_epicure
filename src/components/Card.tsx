import React from "react";
import "./card.scss";
import food1 from "../assets/claro.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={food1} alt="fav1" />
      <div className="card-text">
        <h3>Title</h3>
        <p>description</p>
      </div>
    </div>
  );
};

export default Card;
