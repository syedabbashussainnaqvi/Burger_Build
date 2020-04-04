import React from "react";
import classes from "./Modal.module.css";
const Modal = (props) => {
  const assignedClass = [classes.Modal, classes.card];
  const show = (
    <div className={assignedClass.join(" ")}>
      <strong>Your Order</strong>
      <p>A delicious burger with following ingredients</p>
      {props.children}
      <p>Continue to Checkout?</p>
    </div>
  );
  return <React.Fragment>{props.showOrder ? show : null}</React.Fragment>;
};

export default Modal;
