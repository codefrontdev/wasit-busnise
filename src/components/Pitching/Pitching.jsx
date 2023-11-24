import React from "react";
import './pitching.css';
import headerImg from "../../assets/images/impressive-business-results.jpg";
import Title from "../Title/Title";
import Star from "../Star/Star";





const Pitching = () => {
  return (
    <>
      <div className="pitching">
        <div className="container d-flex">
          <div className="pitching-left">
            <Star />
            <div className="pitching-title">

              <h2>
                Pitching the Client with right <span>Methods</span>
              </h2>
              <p>
                Lorem lpsum is simply dummy text of the printing and typesetting
                industry. Lorem lpsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="pitching-content">
              <div className="pitching-text">
                <b>
                  <span>250%</span>
                  Sales Increased
                </b>
                <b>
                  <span>500%</span>
                  Engagements
                </b>
                <b>
                  <span>58K</span>
                  Revenue in 4months
                </b>
                <b>
                  <span>3M</span>
                  Lorem Ipsum
                </b>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus le
              </p>
            </div>
            <div className="btn-agency d-flex flex-column">
                <span>Elina House</span>
                <a href="">CEO OF WASIT BUSINESS</a>
            </div>
            
          </div>
          <div className="pitching-right">
                <img src={headerImg} alt="" />
            <div className="pitching-right-content-text">
              <h2>34M</h2>
              <span>Revenue increased in 5months</span>
              <p>
                Lorem lpsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pitching;
