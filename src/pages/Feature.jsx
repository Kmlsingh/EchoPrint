import React from "react";
import LotusCanvas from "../canvas/Lotus";
import "./Feature.css"; // Import the CSS file

const Feature = () => {
  const title = "Put your art on your cup";
  const description = "Love chai or coffee? Get your own custom cup with your art on it. Order now and get a 10% discount.";

  return (
    <div className="feature-container">
      <div className="canvas-container">
        <LotusCanvas file="lotus" isMobile={false} />
      </div>
      <div className="content-container">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
};

export default Feature;