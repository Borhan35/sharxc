import React from "react";
import Wrapper from "../assets/wrapper/Register";
import FormRow from "./FormRow";
import logo from "../assets/img/x-big.png";

const Register = () => {
  return (
    <Wrapper>
      <form>
        <div className="form-center register-bg">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>register</span>
          </div>
          {/* First Name */}
          <FormRow type="text" placeholder="first name" />
          {/* Email */}
          <FormRow type="email" placeholder="e-mail" />
          {/* Last Name */}
          <FormRow type="text" placeholder="last name" />
          {/* Company */}
          <FormRow type="text" placeholder="company" />
          {/* Password */}
          <FormRow type="password" placeholder="password" />
          {/* Checkbox */}
          <div class="form-group">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">Remind me</label>
          </div>

          <button type="submit" className="btn">
            register
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
