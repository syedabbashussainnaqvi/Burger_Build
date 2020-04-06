import React from "react";
import Classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideBar from "../Navigation/SideBar/SideBar";
const layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideBar />
      <main className={Classes.Context}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
