import React from "react";
import Typewriter from "typewriter-effect";
import Star from "../Star/Star";
import Form from "./Form";
import { useLocation } from "react-router-dom";

const HeaderLeft = ({ title, span }) => {
  const location = useLocation();
  return (
    <>
      <div className="header-left col-6">
        <Star />
        {location.pathname === "/about" ? (
          <h3>
            {title}
            <span>{span}</span>
          </h3>
        ) : (
          <h3>
            Marketing your Brand is Easy with
            <Typewriter
              options={{
                skipAddStyles: true,
                strings: "Wasit Business",
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        )}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        {location.pathname === "/" && <Form />}
        <div className="statistics d-flex my-3">
          <div className="statistics-client ">
            <i className="fa-solid fa-filter-circle-dollar"></i>
            <span>50K satisfied Clients</span>
          </div>
          <div className="statistics-project">
            <i className="fa-solid fa-money-bill"></i>
            <span>450+ project Done</span>
          </div>
        </div>
        {location.pathname === "/about" && (
          <div className="about-component d-flex">
            <div className="about-component-content">
              <div className="icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h5>Success comes with patience</h5>
              <p>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
            </div>
            <div className="about-component-content">
              <div className="icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h5>Holding your Potentials</h5>
              <p>Lorem ipsum dolor sit amet consecte nadipiscing elit</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderLeft;
