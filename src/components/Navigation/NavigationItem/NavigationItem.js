import React from "react";
import classes from "./NavigationItem.module.css";

const NavigationItem = () => {
  return (
    <ul className={classes.header}>
      <li>
        <a className={classes.active} href="#home">
          Burger Builder
        </a>
        <a href="#contact">Checkout</a>
      </li>
    </ul>
  );
};

export default NavigationItem;
