import React from "react";
import styled from "styled-components";
import logo from "../assets/img/news-logo.png";

const NewsLogo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="news logo" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 34px;
  img {
    max-width: 100%;
    height: auto;
  }
  @media (min-width: 992px) {
    padding-bottom: 84px;
  }
`;

export default NewsLogo;
