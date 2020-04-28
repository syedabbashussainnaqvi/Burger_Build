import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import Logo from "../../Logo/Logo";
import OpenSideBar from "../SideBar/OpenSideBar/OpenSideBar";
const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <OpenSideBar sideDrawerHandler={props.sideDrawerHandler} />
      <Logo />
      <nav className={classes.screenCheck}>
        <NavigationItem token={props.token} />
      </nav>
    </header>
  );
};

export default Toolbar;
