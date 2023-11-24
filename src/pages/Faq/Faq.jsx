import React from "react";
import TitlePage from "../../components/TitilePage/TitlePage";
import Questions from "../../components/Questions/Questions";
import './faq.css';

const Faq = () => {
  return (
    <>
      <div className="faq">
        <TitlePage
          data={{
            h2: "FAQ about ",
            span: "Wasit Business",
            prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            path: "FAQ",
          }}
        />
        <Questions />
      </div>
    </>
  );
};

export default Faq;
