import React from "react";
import headerImg from "../../assets/images/impressive-business-results.jpg";
import './bg-image.css'






const BgImg = () => {
  return (
    <>
      <div className="bg-img">
      {/* <img src={headerImg} alt="" /> */}
        <div className="bg-img-text">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim
            ad minim t dolore magna aliqua
          </p>
          <h5>Janc Maria</h5>
          <span>SEO Specialist</span>

        </div>
        </div>
      </div>
    </>
  );
};

export default BgImg;
