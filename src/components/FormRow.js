import React from "react";
import Wrapper from "../assets/wrapper/FormRow";

const FormRow = ({ type, placeholder }) => {
  return (
    <Wrapper>
      <input type={type} placeholder={placeholder} />
    </Wrapper>
  );
};

export default FormRow;
