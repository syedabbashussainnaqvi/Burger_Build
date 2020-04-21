import * as actionType from "./actionType";
import Axios from "../../axios-order";
export const addIngredients = (ingredientName) => {
  return {
    type: actionType.addIngredients,
    ingredient: ingredientName,
  };
};

export const removeIngredients = (ingredientName) => {
  return {
    type: actionType.removeIngredients,
    ingredient: ingredientName,
  };
};

export const initIngredients = (ingredientList) => {
  return {
    type: actionType.initIngredients,
    ingredients: ingredientList,
  };
};

export const initIngredientsBurgerBuilder = () => {
  return (dispatch) => {
    Axios.get("Ingrdients.json").then((response) => {
      dispatch(initIngredients(response.data));
    });
  };
};
