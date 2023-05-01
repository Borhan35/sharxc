import React from "react";
import ReadMoreSection from "./ReadMoreSection";
import { aboutContent } from "../utils/content";

const Company = () => {
  const content = aboutContent.content.map(
    ({ type, id, text, url, alt }, index) =>
      type === "paragraph" ? (
        <p
          key={id || index}
          dangerouslySetInnerHTML={{ __html: text.substr(0, 600) + "..." }}
        />
      ) : type === "image" ? (
        <img key={id || index} src={url} alt={alt} />
      ) : null
  );

  return (
    <>
      <ReadMoreSection
        heading="company"
        subText={aboutContent.title}
        classWrap="companyWrap"
        bg="#00a77b"
        content={content.slice(0, 2)}
        path="about"
      />
    </>
  );
};

export default Company;
