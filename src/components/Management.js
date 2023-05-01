import React from "react";
import Wrapper from "../assets/wrapper/Management";
import { TfiAngleRight } from "react-icons/tfi";
import logo from "../assets/img/x-big.png";
import founder from "../assets/img/founder.png";
import ceo from "../assets/img/ceo.png";

const Management = () => {
  return (
    <Wrapper id="management">
      <div className="container">
        <div className="management-content">
          <h4>
            <TfiAngleRight className="icon" />
            MANAGEMENT
          </h4>
          <div className="partner-content">
            <div className="item">
              <div className="partner-img">
                <img src={founder} alt="founder" />
              </div>
              <strong>Izak Carmel</strong>
              <p>Founder, Partner </p>
            </div>
            <div className="big-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="item">
              <div className="partner-img">
                <img src={ceo} alt="ceo" />
              </div>
              <strong>Gabor Gyozo</strong>
              <p>CEO, Partner </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Management;
