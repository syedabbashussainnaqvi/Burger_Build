import React, { useState } from "react";
import Classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideBar from "../Navigation/SideBar/SideBar";
const Layout = (props) => {
  const [state, setState] = useState({
    sideDrawer: false,
  });

  const sideDrawerHandler = () => {
    console.log("Abbsa");
    setState({
      sideDrawer: !state.sideDrawer,
    });
  };
  return (
    <React.Fragment>
      <Toolbar sideDrawerHandler={sideDrawerHandler} />
      <SideBar sideDrawer={state.sideDrawer} />
      <main className={Classes.Context}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
