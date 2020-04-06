import React from "react";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo1}>
      <img
        src="https://cdn.imgbin.com/15/17/18/imgbin-hamburger-logo-fast-food-restaurant-hamburg-1s81xNF0rxuHK5nDvWZhmvTQm.jpg"
        alt="Burger"
        className={classes.Logo}
      />
    </div>
  );
};
export default Logo;
