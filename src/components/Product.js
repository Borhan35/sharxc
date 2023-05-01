import React from "react";
import ReadMoreSection from "./ReadMoreSection";
import { productContent } from "../utils/content";

const Product = () => {
  const content = productContent.content.map(
    ({ type, id, text, url, alt }, index) =>
      type === "paragraph" ? (
        <p
          key={id || index}
          dangerouslySetInnerHTML={{ __html: text.substr(0, 429) + "..." }}
        />
      ) : type === "image" ? (
        <img key={id || index} src={url} alt={alt} />
      ) : null
  );

  return (
    <>
      <ReadMoreSection
        heading="products"
        subText="SHARX2"
        classWrap="productWrap"
        bg="#1c2636"
        content={content.slice(0, 2)}
        path="product"
      />
    </>
  );
};

export default Product;
