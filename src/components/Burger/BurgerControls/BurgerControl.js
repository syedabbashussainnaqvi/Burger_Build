import React from "react";
import classes from "./BurgerControl.module.css";
const burgerControl = (props) => {
  const ingredient = ["Meat", "Cheese", "Salad", "Bacon"];

  const list = ingredient.map((item, index) => {
    return (
      <div key={index} className={classes.BuildControl}>
        <div className={classes.Label}>{item}</div>
        <button className={classes.More} onClick={() => props.addHandler(item)}>
          More
        </button>
        <button
          className={classes.Less}
          onClick={() => props.removeHandler(item)}
          disabled={
            props.ingredients[item.toLocaleLowerCase()] === 0 ? true : false
          }
        >
          Less
        </button>
      </div>
    );
  });

  return (
    <div className={classes.Wrapper}>
      <div>
        Current Price: <strong>{props.price}</strong>
      </div>
      {list}
      <button
        className={classes.Order}
        disabled={props.price === 200 ? true : false}
        onClick={props.showOrderHandler}
      >
        {props.token ? "ORDER NOW" : "LogIn to Place Order"}
      </button>
    </div>
  );
};
export default burgerControl;
