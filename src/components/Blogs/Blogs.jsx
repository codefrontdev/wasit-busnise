import React from "react";
import Title from "../Title/Title";
import Star from "../Star/Star";
import "./blogs.css";
import BlogsItems from "./BlogsItems";

const Blogs = () => {
  return (
    <>
      <div className="blogs">
        <div className="container">
          <Title
            h2={"Read our Recent "}
            span={"blogs"}
            prgh={`
                Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`}
          />
          <div className="btn-view-all justify-content-between">
            <Star />
            <a href="#d">View All</a>
          </div>
            <BlogsItems />
        </div>
      </div>
    </>
  );
};

export default Blogs;
