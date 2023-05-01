import React from "react";
import socialLinks from "../utils/socialLinks";
import Wrapper from "../assets/wrapper/Social";

const Social = () => {
  return (
    <Wrapper className="social">
      {socialLinks.map((social) => {
        const { id, icon, url } = social;
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default Social;
