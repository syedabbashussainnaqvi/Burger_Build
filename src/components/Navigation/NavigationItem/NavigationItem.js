import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
const NavigationItem = () => {
  return (
    <ul className={classes.header}>
      <li>
        <NavLink to="/" exact activeStyle={{ color: "red" }}>
          Burger Builder
        </NavLink>
        <NavLink to="/order" exact activeStyle={{ color: "red" }}>
          Orders
        </NavLink>
        <NavLink to="/auth" exact activeStyle={{ color: "red" }}>
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationItem;
