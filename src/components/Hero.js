import React, { useState } from "react";
import { Social, Menu } from "../components";
import logo from "../assets/img/logo.png";
import Wrapper from "../assets/wrapper/Hero";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const [show, setShow] = useState(false);

  const toggleBarHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="content-center">
          {!show && <Social />}
          <button className="bar" onClick={toggleBarHandler}>
            {!show ? <FaBars /> : <FaTimes />}
          </button>
          <div className="hero-menu">
            {/* Overlay */}
            {show && (
              <div className="overlay" onClick={() => setShow(false)}></div>
            )}
            <div className="icon">
              <FaUser />
            </div>
            <Menu show={show} toggleBarHandler={toggleBarHandler} />
          </div>
          {!show && (
            <div>
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <p className="sologan">
                <span>Revolutionizing</span> medical waste disposal
              </p>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
