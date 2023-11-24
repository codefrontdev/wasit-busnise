import React from "react";
import "./about.css";
import StepsSuccess from "../../components/StepsSuccess/StepsSuccess";
import AboutContent from "../../components/AboutLayout/AboutContent";
import Success from "../../components/Success/Success";
import People from "../../components/People/People";
import BgImg from "../../components/BgImg/BgImg";
import TitlePage from "../../components/TitilePage/TitlePage";

const About = () => {
  window.scrollTo(0, 0);
  return (
    <div className="about">
      <TitlePage
        data={{
          h2: "Success story of ",
          span: "Wasit Busniess",
          prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
          path: "About",
        }}
      />
      <AboutContent />
      <StepsSuccess />
      <Success />
      <People />
      <BgImg />
    </div>
  );
};

export default About;
