import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./SideBar.module.css";
import Logo from "../../Logo/Logo";

const SideBar = (props) => {
  return (
    <div className={classes.SideBar}>
      <Logo />
      <nav>
        <NavigationItem />
      </nav>
    </div>
  );
};

export default SideBar;
