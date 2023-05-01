import React, { useContext } from "react";
import Wrapper from "../assets/wrapper/BlogPost";
import BlogCard from "./BlogCard";
import { NewsLogo } from "../components";
import { SharxcContext } from "../context/context";

const BlogPost = () => {
  const { blogPosts } = useContext(SharxcContext);
  const content = blogPosts
    .map((item) => item)
    .filter((item) => item.type === "latest")
    .slice(0, 2)
    .map((item) => {
      const { id, title, image, category, excerpt, content } = item;
      return { id, title, image, category, excerpt, content };
    });

  return (
    <Wrapper id="news">
      <div className="container">
        <NewsLogo />

        <div className="row">
          {content.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogPost;
