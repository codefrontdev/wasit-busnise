import React from "react";
import headerImg from "../../assets/images/impressive-business-results.jpg";

const BlogsItems = () => {
  return (
    <>
      <div className="blogs-content-items d-flex">
        <div className="blog-content-item">
          <span>branding</span>
          <img src={headerImg} alt="blog" />
          <small>
            <i className="fa-solid fa-pencil"></i>
            <span>November 23, 2023</span>
          </small>
          <h3>We take pride in our work, and we enjoy discussing</h3>
          <p>
            We take pride in our work, and we enjoy discussing a number of
            different topics..
          </p>
          <a href="">
            READ MORE <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="blog-content-item">
          <span>marketing</span>
          <img src={headerImg} alt="blog" />
          <small>
            <i className="fa-solid fa-pencil"></i>
            <span>November 23, 2023</span>
          </small>
          <h3>This amazing blog is one step ahead of the game</h3>
          <p>
            This amazing blog is one step ahead of the game. From gadget and
            tech coverage..
          </p>
          <a href="">
            READ MORE <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="blog-content-item">
          <span>marketing</span>
          <img src={headerImg} alt="blog" />
          <small>
            <i className="fa-solid fa-pencil"></i>
            <span>November 23, 2023</span>
          </small>
          <h3>
            Convince & Convert offers a varicty of resources including a website
          </h3>
          <p>
            What is great about Socialfresh's posts is that many of them include
            alternative media embedded..
          </p>
          <a href="">
            READ MORE <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogsItems;
