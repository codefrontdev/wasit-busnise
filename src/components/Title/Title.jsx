import React from "react";
import './title.css';


const Title = ({h2, span, prgh, path}) => {
  
  return (
    <>
    <div className="content-title">
      <div className="title d-flex py-3">
        <h2 className="col-6">
        {path && (
          <span className="path">{path}</span>
          )}
            {h2}
           <span>{span}</span>
        </h2>
        <p  className="col-5">
            {prgh}
        </p>
      </div>

    </div>
    </>
  );
};

export default Title;
