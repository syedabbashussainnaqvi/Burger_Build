import * as actionType from "../actions/actionType";

const Ingredients_Price = {
  salad: 0.5,
  meat: 1.4,
  cheese: 0.4,
  bacon: 0.7,
};

const initialState = {
  ingredients: null,
  price: 200,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.addIngredients:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        price: state.price + Ingredients_Price[action.ingredient],
      };
    case actionType.removeIngredients:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        price: state.price - Ingredients_Price[action.ingredient],
      };
    case actionType.initIngredients:
      return {
        ...state,
        ingredients: action.ingredients,
        price: 200,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
