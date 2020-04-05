import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const assigned = [classes.Button];
  const btntype = props.type;
  assigned.push(classes[btntype]);

  const buttonHandler = () => {
    if (props.type === "success") {
      window.alert("Order Checkout Successfully");
    } else if (props.type === "danger") {
      props.showOrderHandler();
    }
  };

  return (
    <button className={assigned.join(" ")} onClick={buttonHandler}>
      {props.children}
    </button>
  );
};
export default Button;
