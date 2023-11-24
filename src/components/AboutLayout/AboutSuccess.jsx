import React from "react";
import "./about-success.css";

const AboutSuccess = () => {
  return (
    <>
      <div className="about-success">
        <div className="about-success-text d-flex">
          <b>
            <span>250%</span> Sales Traffic
          </b>
          <b>
            <span>4m</span> Profit yearly
          </b>
        </div>

        <div className="about-success-text-content d-flex">
          <div className="icon">
            <i className="fa-solid fa-medal"></i>
          </div>
          <div className="text">
            <h5>Extra ordinary planning</h5>
            <p>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
          </div>
        </div>
        <div className="about-success-text-content d-flex">
          <div className="icon">
            <i className="fa-solid fa-money-bill"></i>
          </div>
          <div className="text">
            <h5>Aquire client with Affordable price</h5>
            <p>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
          </div>
        </div>
        <a href="">View Services</a>
      </div>
    </>
  );
};

export default AboutSuccess;
