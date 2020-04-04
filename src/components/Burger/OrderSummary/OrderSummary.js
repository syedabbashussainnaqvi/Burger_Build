import React from "react";

const OrderSummary = (props) => {
  const summary = Object.keys(props.ingredients).map((key, index) => {
    return (
      <div key={index}>
        <ul>
          <li>
            {key}: {props.ingredients[key]}
          </li>
        </ul>
      </div>
    );
  });
  return <div>{summary}</div>;
};
export default OrderSummary;
