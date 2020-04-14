import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  const assigned = [classes.Button];
  const btntype = props.type;
  assigned.push(classes[btntype]);

  const buttonHandler = () => {
    if (props.type === "success") {
      props.postOrderHandler(true, false);
    } else if (props.type === "danger") {
      props.showOrderHandler();
    }
  };
  console.log(props);
  return (
    <button className={assigned.join(" ")} onClick={buttonHandler}>
      {props.children}
    </button>
  );
};
export default Button;
