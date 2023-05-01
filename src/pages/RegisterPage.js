import React from "react";
import Wrapper from "../assets/wrapper/RegisterPage";
import { Register, Login } from "../components";

const RegisterPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <h2>
            register <span>or</span> login
          </h2>
        </div>
        <div className="row">
          <div className="login">
            <Login />
          </div>
          <div className="register">
            <Register />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RegisterPage;
