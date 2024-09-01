import React from "react";
import "./Card.css";
import svg from "../../assets/select.svg"

const Card = () => {
  return (
    <div className="card_main">
      <div className="grid_container">
        <div className="card_body_1">
          <img src={svg} alt="" />
          <h2>You are looking for </h2>
          <p>Select the subsidy you want to choose</p>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
