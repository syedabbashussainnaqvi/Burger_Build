import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {
  const orderList = Object.keys(props.orderDetail).map((item, index) => {
    return (
      <div key={index} className={classes.Order}>
        <p>
          Name:<strong>{props.orderDetail[item].name}</strong>
        </p>
        <p>
          Email:<strong>{props.orderDetail[item].email}</strong>
        </p>

        <p>
          Price:<strong>USD {props.orderDetail[item].price}</strong>{" "}
        </p>
        <p>Order: 2000</p>
      </div>
    );
  });

  return orderList;
};
export default Order;
