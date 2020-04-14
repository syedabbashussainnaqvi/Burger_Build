import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";
import { withRouter } from "react-router-dom";
const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummery}>
      <h1>Lets Hope U Like the taste</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>

      <Button type="danger" showOrderHandler={props.cancelOrder}>
        CANCEL
      </Button>
      <Button type="success" postOrderHandler={props.nextPage}>
        Continue
      </Button>
    </div>
  );
};
export default withRouter(CheckoutSummary);
