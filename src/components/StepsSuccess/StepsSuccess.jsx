import React from "react";
import Title from "../Title/Title";
import "./steps-success.css";

const StepsSuccess = () => {
  return (
    <>
      <div className="steps-success py-5">
        <div className="container">
          <Title
            h2={"Our Steps to "}
            span={"Success"}
            prgh={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
          />
          <div className="steps-items-card d-flex">
            <div className="steps-item-card">
              <div className="icon">
                <i className="bi bi-clipboard-data"></i>
              </div>
              <h3>Root Analysis</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamco
              </p>
            </div>
            <div className="steps-item-card">
              <div className="icon">
                <i className="bi bi-bug-fill"></i>
              </div>
              <h3>Diagnosc Problem</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamco
              </p>
            </div>
            <div className="steps-item-card">
              <div className="icon">
                <i className="bi bi-stack"></i>
              </div>
              <h3>Consult Solution</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamco
              </p>
            </div>
            <div className="steps-item-card">
              <div className="icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <h3>Exccute Plan</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamco
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsSuccess;
