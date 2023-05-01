import React from "react";
import productImg from "../assets/img/product-1.png";
import Wrapper from "../assets/wrapper/ProductPicture";
import { productContent } from "../utils/content";
import { Link } from "react-router-dom";

const ProductPicture = () => {
  const lastParagraph =
    productContent.content[productContent.content.length - 1];

  return (
    <Wrapper>
      <img src={productImg} alt="product img" />
      <div className="text-wrapper">
        <div className="overlay-text">
          <p>{lastParagraph.text}</p>
        </div>
        <Link to="/" className="btn">
          more pictures
        </Link>
      </div>
    </Wrapper>
  );
};

export default ProductPicture;
