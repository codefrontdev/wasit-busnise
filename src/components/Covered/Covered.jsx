import React from "react";
import "./covered.css";
import Title from "../Title/Title";
import Star from "../Star/Star";

const Covered = () => {
  return (
    <>
      <div className="covered py-5">
        <div className="container">
          <Title
            h2={"We've got your job"}
            span={" covered"}
            prgh={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            }
          />
            <Star />
          <div className="card-items">
            <div className="card-item">
              <div className="icon">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <h3>Social Media Leads</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="btn-more">
                <a href="">LEARN MORE </a>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
              <span>500 project done</span>
            </div>
            <div className="card-item">
              <div className="icon">
                <i className="fa-solid fa-brush"></i>
              </div>
              <h3>Branding Identity</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="btn-more">
                <a href="">LEARN MORE </a>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
              <span>340 project done</span>
            </div>
            <div className="card-item">
              <div className="icon">
                <i className="fa-solid fa-window-maximize"></i>
              </div>
              <h3>Ecommerce Solution</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="btn-more">
                <a href="">LEARN MORE </a>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
              <span>500 project done</span>
            </div>
            <div className="card-item">
              <div className="icon">
                <i className="fa-brands fa-cc-amazon-pay"></i>
              </div>
              <h3>Payment Gateway</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="btn-more">
                <a href="">LEARN MORE </a>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
              <span>500 project done</span>
            </div>
            <div className="card-item">
              <div className="icon">
                <i className="fa-solid fa-rectangle-ad"></i>
              </div>
              <h3>Ad Campaign</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="btn-more">
                <a href="">LEARN MORE </a>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
              <span>205 project done</span>
            </div>
            <div className="card-item">
              <div className="icon">
                <i className="fa-solid fa-filter-circle-dollar"></i>
              </div>
              <h3>Sales Funnel</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <div className="btn-more">
                <a href="">LEARN MORE </a>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
              <span>500 project done</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covered;
