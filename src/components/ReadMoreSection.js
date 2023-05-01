import React from "react";
import whiteLogo from "../assets/img/x-white.png";
import Wrapper from "../assets/wrapper/ReadMoreSection";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const ReadMoreSection = ({
  heading,
  subText,
  classWrap,
  bg,
  content,
  path,
}) => {
  const navigate = useNavigate();
  const openPathHandler = () => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper id={heading} style={{ background: bg }}>
      <div className="container">
        <div className={classWrap}>
          <h1 className="heading">
            {heading} <img src={whiteLogo} alt="logo" /> <span>{subText}</span>
          </h1>
          <div className="readmoreWrapper">{content}</div>
          <div className="readmore" onClick={openPathHandler}>
            Read more
            <BsChevronDown />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ReadMoreSection;
