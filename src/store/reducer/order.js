import * as actionType from "../actions/actionType";

const initialState = {
  orders: [],
  ids: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.purchaseBurgerPass:
      return {
        ...state,
        orders: state.orders.concat(action.orderDetail),
      };
    case actionType.purchaseBurgerFail:
      return {
        ...state,
        error: action.error,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
