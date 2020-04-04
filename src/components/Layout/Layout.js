import React from "react";
import Classes from "./Layout.module.css";
const layout = props => {
  return (
    <React.Fragment>
      <div> Toolbar, SideDrawer, backdrop</div>
      <main className={Classes.Context}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
