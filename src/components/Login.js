import React from "react";
import Wrapper from "../assets/wrapper/Register";
import FormRow from "./FormRow";
import logo from "../assets/img/x-big.png";

const Login = () => {
  return (
    <Wrapper>
      <form>
        <div className="form-center login-bg">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>login</span>
          </div>
          {/* Email */}
          <FormRow type="email" placeholder="e-mail" />
          {/* Password */}
          <FormRow type="password" placeholder="password" />

          <button type="submit" className="btn">
            login
          </button>
          <a href="#" className="forget-password">
            Forgot password
          </a>
        </div>
      </form>
    </Wrapper>
  );
};

export default Login;
