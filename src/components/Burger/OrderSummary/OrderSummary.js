import React from "react";

const OrderSummary = (props) => {
  const summary = Object.keys(props.ingredients).map((key, index) => {
    return (
      <li key={index}>
        {key}: {props.ingredients[key]}
      </li>
    );
  });
  return (
    <div>
      <ol>{summary}</ol>
    </div>
  );
};
export default OrderSummary;
