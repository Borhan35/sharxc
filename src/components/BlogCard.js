import React from "react";
import Wrapper from "../assets/wrapper/BlogCard";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, title, image, excerpt }) => {
  const navigate = useNavigate();
  const openPathHandler = () => {
    navigate(`/blog/${id}/${title.toLowerCase().replace(/\s/g, "-")}`);
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <div className="blog-img">
        <img src={image} alt={title} />
        <h3 className="title">{title}</h3>
      </div>
      <div className="blog-content">
        <p>{excerpt}</p>
        <div onClick={openPathHandler} className="btn">
          read
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogCard;
