import React from "react";
import "./Card.css";
import svg from "../../assets/select.svg"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <h5>e-Kisan Upaj Nidhi</h5>
          <p>Lorem ipsum dolor sit amet.</p>
          <a href=""><Button className="btn btn-secondary">button </Button></a>
          
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
          <a href=""><Button  className="btn btn-secondary">button </Button></a>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
          <a href=""><Button  className="btn btn-secondary">button </Button></a>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
          <a href=""><Button  className="btn btn-secondary">button </Button></a>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
          <a href=""><Button className="btn btn-secondary">button </Button></a>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
          <a href=""><Button>button </Button></a>
        </div>
        <div className="card_body">
          <p>Lorem ipsum dolor sit amet.</p>
          <a href=""><Button  className="btn btn-secondary">button </Button></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
