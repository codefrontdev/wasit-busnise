import React from "react";
import headerImg from "../../assets/images/impressive-business-results.jpg";
import Star from "../Star/Star";
import { useLocation } from "react-router-dom";

const HeaderRight = ({data}) => {
  const location = useLocation();
  return (
    <>
      <div className="header-right">
        <img src={headerImg} alt="" />
        <div className="header-exp p-3 text-center">
          {location.pathname === "/about" && (
            <i className="fa-solid fa-hand-holding-dollar"></i>
          )}
          <Star />
          <h4>{data.h3}</h4>
          <p>{data.p}</p>
        </div>
        <div className="header-job-done p-4">
          <h4>{data.title}</h4>
          <span>
          {data.name}
          </span>
          <p>
          {data.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderRight;
