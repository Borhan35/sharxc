import React from "react";
import { Social, Logo, Menu } from "../components";
import Wrapper from "../assets/wrapper/Footer";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          {/* Left */}
          <div className="footer-item">
            {/* Social */}
            <Social className="footer-social" />
            <Logo />
          </div>
          {/* Right */}
          <div className="footer-item">
            <Menu />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
