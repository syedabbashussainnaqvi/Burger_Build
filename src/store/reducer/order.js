import * as actionType from "../actions/actionType";

const initialState = {
  orders: [],
  error: "",
  successFlag: false,
  OrderFromServer: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.purchaseBurgerPass:
      const order = {
        ...action.orderDetail,
        id: action.id.name,
      };
      return {
        ...state,
        orders: state.orders.concat(order),
        successFlag: true,
      };
    case actionType.purchaseBurgerFail:
      return {
        ...state,
        error: action.error,
        successFlag: false,
      };
    case actionType.successOrderFlag:
      return {
        ...state,
        successFlag: false,
      };
    case actionType.getOrderFromServer:
      return {
        ...state,
        OrderFromServer: action.orderFromServer,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
