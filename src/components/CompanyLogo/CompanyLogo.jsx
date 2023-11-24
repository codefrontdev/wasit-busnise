import React from "react";
import './company-logo.css';

const CompanyLogo = () => {
  return (
    <>
      <div className="price-covered-logo-items d-flex">
        <div className="price-covered-logo d-flex align-items-center">
          <img
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/mastercard-logo.png"
            alt="mastercard-logo"
          />
          <p>logoipsum</p>
        </div>
        <div className="price-covered-logo d-flex align-items-center">
          <img
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/canvas-student.png"
            alt="canvas-student"
          />
          <p>logoipsum</p>
        </div>
        <div className="price-covered-logo d-flex align-items-center">
          <img
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/snappa.png"
            alt="snappa"
          />
          <p>logoipsum</p>
        </div>
        <div className="price-covered-logo d-flex align-items-center">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/console.png"
            alt="console"
          />
          <p>logoipsum</p>
        </div>
      </div>
    </>
  );
};

export default CompanyLogo;
