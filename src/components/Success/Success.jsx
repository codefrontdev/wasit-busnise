import React from "react";
import headerImg from "../../assets/images/impressive-business-results.jpg";
import "./success.css";
import Title from "../Title/Title";
import SuccessItem from "./SuccessItem";
import { useLocation } from "react-router-dom";
import AboutSuccess from "../AboutLayout/AboutSuccess";

const Success = () => {
  const location = useLocation();
  return (
    <>
      <div className="success py-5">
        <div className="container">
          <div className="success-content d-flex">
            <div className="success-content-left col-6">
              <div className="success-left">
                <img src={headerImg} alt="" />
                <div className="success-years p-4">
                  <span></span>
                  <h3>We've been acheiving Success for 10 Years</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </p>
                </div>
              </div>
            </div>
            <div className="success-right px-4">
              <Title
                h2={"Success came with patience in "}
                span={"Wasit Business"}
                prgh={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                }
              />
              {location.pathname === "/about" ? (
                <>
                  <AboutSuccess />
                </>
              ) : (
                <SuccessItem />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
