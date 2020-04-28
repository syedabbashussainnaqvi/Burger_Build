import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
const NavigationItem = (props) => {
  return (
    <ul className={classes.header}>
      <li>
        <NavLink to="/" exact activeStyle={{ color: "red" }}>
          Burger Builder
        </NavLink>
        {/* showing order tab only if user is authenticated */}
        {props.token ? (
          <NavLink to="/order" exact activeStyle={{ color: "red" }}>
            Orders
          </NavLink>
        ) : null}
        {/* Changing link text and destination on the base of authentication */}
        {props.token ? (
          <NavLink to="/logout" exact activeStyle={{ color: "red" }}>
            LogOut
          </NavLink>
        ) : (
          <NavLink to="/auth" exact activeStyle={{ color: "red" }}>
            Authenticate
          </NavLink>
        )}
      </li>
    </ul>
  );
};

export default NavigationItem;
