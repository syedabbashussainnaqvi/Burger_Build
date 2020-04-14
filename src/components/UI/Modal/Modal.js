import React, { useContext } from "react";
import classes from "./Modal.module.css";
import Button from "../Button/Button";
import AuthContext from "../../../Context/Auth-Context";
const Modal = (props) => {
  const assignedClass = [classes.Modal, classes.card];
  const contextProp = useContext(AuthContext);
  console.log("Model" + props);
  const show = (
    <div className={assignedClass.join(" ")}>
      <strong>Your Order</strong>
      <p>A delicious burger with following ingredients</p>
      {props.children}
      <p>
        {" "}
        <strong> Total Price: {contextProp.price}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button type="success" postOrderHandler={contextProp.postOrderHandler}>
        CONTINUE
      </Button>
      <Button type="danger" showOrderHandler={contextProp.showOrderHandler}>
        CANCEL
      </Button>
    </div>
  );
  return <React.Fragment>{contextProp.showOrder ? show : null}</React.Fragment>;
};

export default Modal;
