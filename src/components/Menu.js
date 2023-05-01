import React from "react";
import links from "../utils/links";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Wrapper from "../assets/wrapper/Menu";

const Menu = ({ show, toggleBarHandler }) => {
  const linkHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper className={`${show ? "menu" : "menu mobileMenu"}`}>
      {links.map((link) => {
        const { id, text, path, href, active } = link;
        return (
          <li key={id} className={active ? active : ""}>
            {path ? (
              <Link to={path} onClick={linkHandler}>
                {text}
              </Link>
            ) : (
              <HashLink smooth to={`/${href}`} onClick={toggleBarHandler}>
                {text}
              </HashLink>
            )}
          </li>
        );
      })}
    </Wrapper>
  );
};

export default Menu;
