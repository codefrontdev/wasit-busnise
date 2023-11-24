import React from "react";
import TitlePage from "../../components/TitilePage/TitlePage";
import BlogsItems from "../../components/Blogs/BlogsItems";

const Blog = () => {
  return (
    <>
      <div className="blog py-5">
        <TitlePage
          data={{
            h2: "Blog",
            prgh: "Lorem ipsum dolor sit amet, consectetur adipiscing elil. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            path: "Blog",
          }}
        />
        <div className="container">
          <BlogsItems />
        </div>
      </div>
    </>
  );
};

export default Blog;
