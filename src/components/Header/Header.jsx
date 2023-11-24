import React from "react";
import "./header.css";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  

  return (
    <>
      <div className="header my-4">
        <div className="container d-flex align-items-center">
          <HeaderLeft />
          <HeaderRight
            data={{
              h3: "12+",
              p: "Years of experience",
              title: "Amazing Job Done By Wasit Business",
              name: "Eren Jeger, CEO of Rift.io",
              desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
