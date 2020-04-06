import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./SideBar.module.css";
import Logo from "../../Logo/Logo";
import OpenSideBar from "./OpenSideBar/OpenSideBar";

const SideBar = (props) => {
  const assignedClass = [classes.SideBar];
  if (props.sideDrawer === true) {
    assignedClass.push(classes.Open);
  } else {
    assignedClass.push(classes.Close);
  }
  return (
    <div className={assignedClass.join(" ")}>
      <div onClick={props.sideDrawerHandler}>
        <OpenSideBar />
      </div>

      <Logo />
      <nav>
        <NavigationItem />
      </nav>
    </div>
  );
};

export default SideBar;
