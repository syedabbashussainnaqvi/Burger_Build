import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
const Burger = props => {
  const keys = Object.keys(props.ingredients);

  const showIngredients = keys.map((key, indexes) => {
    const quantity = props.ingredients[key];
    let wrapper = [];
    for (let index = 0; index < quantity; index++) {
      wrapper.push(<BurgerIngredients key={key + index} type={key} />);
    }
    return wrapper;
  });

  console.log("Burger Render");
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread_top" />
      {showIngredients}
      <BurgerIngredients type="bread_bottom" />
    </div>
  );
};

export default Burger;
