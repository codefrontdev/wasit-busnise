import React from "react";
import Title from "../Title/Title";
import headerImg from "../../assets/images/impressive-business-results.jpg";
import Star from "../Star/Star";
import './people.css'
import CompanyLogo from "../CompanyLogo/CompanyLogo";




const People = () => {
  return (
    <>
      <div className="people py-5">
        <div className="container">
          <Title
            h2={"Meet people behind "}
            span={"Wasit Business"}
            prgh={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, 
                luctus nec ullamcorper mattis, pulvinar dapibus leo.`}
          />
          <div className="people-content-items d-flex">
            <div className="people-item">
              <img src={headerImg} alt="" />
              <div className="content">
                <h3>Elina House</h3>
                <span>SEO of Wasit Business</span>
              </div>
            </div>
            <div className="people-item">
              <img src={headerImg} alt="" />
              <div className="content">
                <h3>Micheal Moon</h3>
                <span>Executive Director</span>
              </div>
            </div>
            <div className="people-item">
              <img src={headerImg} alt="" />
              <div className="content">
                <h3>Adam Levi</h3>
                <span>Content Strategist</span>
              </div>
            </div>
          </div>
            <Star />
            <CompanyLogo />
        </div>
      </div>
    </>
  );
};

export default People;
