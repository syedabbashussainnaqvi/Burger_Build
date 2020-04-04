import React from "react";
import classes from "./BurgerControl.module.css";
const burgerControl = (props) => {
  const ingredient = ["Meat", "Cheese", "Salad", "Bacon"];

  const list = ingredient.map((item, index) => {
    return (
      <div key={index} className={classes.BuildControl}>
        <div className={classes.Label}>{item}</div>
        <button className={classes.More}> More</button>{" "}
        <button className={classes.Less}> Less</button>
      </div>
    );
  });

  return <div className={classes.Wrapper}>{list}</div>;
};
export default burgerControl;
