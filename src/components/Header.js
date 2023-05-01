import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Wrapper from "../assets/wrapper/Header";
import { Social, Logo, Hero } from "../components";

const Header = () => {
  const [hero, setHero] = useState(true);
  const toggleHero = () => {
    setHero((show) => !show);
  };
  return (
    <>
      {hero ? (
        <Wrapper>
          <div className="container">
            <div className="row">
              <Social />
              <Logo />
              <div className="menu">
                <div className="icon">
                  <FaUser />
                </div>
                <span onClick={toggleHero}> menu </span>
              </div>
            </div>
          </div>
        </Wrapper>
      ) : (
        <Hero />
      )}
    </>
  );
};

export default Header;
