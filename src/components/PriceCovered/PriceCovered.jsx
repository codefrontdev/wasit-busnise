import React from "react";
import "./price-covered.css";
import Title from "../Title/Title";
import Star from "../Star/Star";
import CompanyLogo from "../CompanyLogo/CompanyLogo";

const PriceCovered = () => {
  return (
    <>
      <div className="price-covered py-5">
        <div className="container">
          <Title
            h2={"We've got your job"}
            span={" covered"}
            prgh={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
          />
          <div className="price-covered-card-items d-flex py-5">
            <div className="price-covered-card">
              <h5>BASIC PACKAGE</h5>
              <p className="pargh">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli.
              </p>
              <div className="price-covered-price pb-4">
                <span>$29.99</span>
                <b>/Month</b>
              </div>
              <p>
                <i className="fa-regular fa-circle-check"></i>Lorem ipsum dolor
                sit amet
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>consectetur
                adipiscing elit, sed do.
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>eiusmod tempor
                incididunt ut
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>et dolore magna
                aliqua
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>consectetur
                adipiscing elit
              </p>
              <a href="">Get Started</a>
            </div>
            <div className="price-covered-card pro">
              <Star />
              <h5>ELITE PACKAGE</h5>
              <p className="pargh">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="price-covered-price pb-4">
                <span>$50</span>
                <b>/Month</b>
              </div>
              <p>
                <i className="fa-regular fa-circle-check"></i>Lorem ipsum dolor
                sit amet
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>consectetur
                adipiscing elit, sed do.
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>eiusmod tempor
                incididunt ut
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>et dolore magna
                aliqua
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>consectetur
                adipiscing elit, sed do
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>consectetur
                adipiscing elit
              </p>
              <a href="">Get Started</a>
            </div>
            <div className="price-covered-card">
              <h5>STANDARD PACKAGE</h5>
              <p className="pargh">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli.
              </p>
              <div className="price-covered-price pb-4">
                <span>$45.99</span>
                <b>/Month</b>
              </div>
              <p>
                <i className="fa-regular fa-circle-check"></i>Lorem ipsum dolor
                sit amet
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>consectetur
                adipiscing elit, sed do.
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>eiusmod tempor
                incididunt ut
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>et dolore magna
                aliqua
              </p>
              <p>
                <i className="fa-regular fa-circle-check"></i>consectetur
                adipiscing elit
              </p>
              <a href="">Get Started</a>
            </div>
          </div>
            <Star />
            <CompanyLogo />
        </div>
      </div>
    </>
  );
};

export default PriceCovered;
