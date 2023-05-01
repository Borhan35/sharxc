import React, { useContext } from "react";
import Wrapper from "../assets/wrapper/Blog";
import { useParams } from "react-router-dom";
import { NewsLogo, Carousel } from "../components";
import { SharxcContext } from "../context/context";
import next from "../assets/img/angle-right.png";

const Blog = () => {
  const { blogPosts } = useContext(SharxcContext);

  const { id, postTitle } = useParams();
  const post = blogPosts.find(
    (post) =>
      post.id.toString() === id &&
      post.title.toLowerCase().replace(/\s/g, "-") === postTitle
  );

  if (!post) {
    return (
      <div className="container">
        <div className="not-found-post">
          No post found with title "<span>{postTitle}</span>"
        </div>
      </div>
    );
  }

  const blogContent = post.content.map(({ type, id, text, url, alt }, index) =>
    type === "paragraph" ? (
      <p key={id || index} dangerouslySetInnerHTML={{ __html: text }} />
    ) : type === "image" ? (
      <div className="image">
        <img key={id || index} src={url} alt={alt} />
      </div>
    ) : null
  );

  const { image, title } = post;
  return (
    <Wrapper>
      <div className="container">
        <NewsLogo />
        <div className="blog-image">
          <img src={image} alt={title} />
          <h2 className="blog-title">{title}</h2>
        </div>
        <div className="blog-content-body">{blogContent}</div>
      </div>
      <div className="slider-wrp">
        <div className="container">
          <h5>
            <img src={next} alt="angle right" />
            more news
          </h5>
          {/* Carouse */}
          <div className="carousel">
            <Carousel />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blog;
