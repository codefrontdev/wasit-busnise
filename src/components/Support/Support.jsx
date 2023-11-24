import React from "react";
import Title from "../Title/Title";
import './support.css'
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <>
      <div className="support py-5">
        <div className="container">
          <Title
            h2={"More Support from "}
            span={"Wasit Business"}
            prgh={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
          />
          <div className="supports-items d-flex py-5">
            <div className="support-item">
              <div className="icon">
                <i className="fa-regular fa-comments fa-fade"></i>
              </div>
              <h3>FAQ section</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <Link to="/faq">Learn More</Link>
            </div>
            <div className="support-item">
              <div className="icon">
              
                <i className="fa-regular fa-newspaper fa-beat"></i>
              </div>
              <h3>Submit Ticker</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <a href="">Learn More</a>
            </div>
            <div className="support-item">
              <div className="icon">
                <i className="fa-solid fa-headset fa-fade"></i>
              </div>
              <h3>Online Help center</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <a href="">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
