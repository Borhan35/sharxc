import React from "react";
import Wrapper from "../assets/wrapper/SupportMaintananceSection";
import SupportMaintanance from "./SupportMaintanance";
import { support, maintenanceProgram } from "../utils/content";

const SupportMaintananceSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <SupportMaintanance content={support} />
          <SupportMaintanance content={maintenanceProgram} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SupportMaintananceSection;
