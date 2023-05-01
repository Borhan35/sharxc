import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Wrapper from "../assets/wrapper/Logo";

const Logo = () => {
  return (
    <Wrapper className="logo">
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <img src={logo} alt="logo" />
        <p>
          <span>Revolutionizing</span> medical waste disposal
        </p>
      </Link>
    </Wrapper>
  );
};

export default Logo;
