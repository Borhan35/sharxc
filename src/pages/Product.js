import React from "react";
import Wrapper from "../assets/wrapper/About";
import { productContent } from "../utils/content";

const Product = () => {
  const content = productContent.content.map(
    ({ type, id, text, url, alt }, index) =>
      type === "paragraph" ? (
        <p key={id || index} dangerouslySetInnerHTML={{ __html: text }} />
      ) : type === "image" ? (
        <div className="image" key={id || index}>
          <img src={url} alt={alt} />
        </div>
      ) : null
  );

  return (
    <Wrapper>
      <div className="container">
        <h2>{productContent.title}</h2>
        <div className="content">{content}</div>
        <a href="mailto:youremail@gmail.com" className="btn">
          contact us now!
        </a>
      </div>
    </Wrapper>
  );
};

export default Product;
