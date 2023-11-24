import React from "react";
import './about-content.css';
import HeaderRight from "../Header/HeaderRight";
import HeaderLeft from "../Header/HeaderLeft";

const AboutContent = () => {
  return (
    <>
      <div className="about-content">
        <div className="container d-flex align-items-center">
          <HeaderLeft title={"How we built Success "} span={"online"} />
          <HeaderRight
            data={{
              h3: "9m",
              p: "Yearly revenue",
              title: "It wasn't Easy in start",
              name: "Elina house, CEO of Wasit Busniess",
              desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
