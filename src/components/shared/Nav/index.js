import React from "react";
import Button from "../Button";
import "./Nav.css";

const Nav = () => (
  <div className="Nav">
    <Button className="Nav__button" link={true} path="/" type="transparent">
      Home
    </Button>
    <Button
      className="Nav__button"
      link={true}
      path="/survey"
      type="transparent"
    >
      Questions
    </Button>
    <a
      href="https://shreyaaass.github.io/use-food-now/"
      className="inventory__nav"
    >
      Inventory
    </a>
  </div>
);

export default Nav;
