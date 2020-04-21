import * as actionType from "../actions/actionType";
import Axios from "../../axios-order";
export const orderPass = (orderDetail) => {
  return {
    type: actionType.purchaseBurgerPass,
    orderDetail: orderDetail,
  };
};

export const orderFail = (error) => {
  return {
    type: actionType.purchaseBurgerFail,
    error: error,
  };
};
export const orderPassAsync = (orderDetail) => {
  return (dispatch) => {
    Axios.post("/orders.json", orderDetail)
      .then((respone) => {
        dispatch(orderPass(orderDetail));
      })
      .catch((error) => {
        dispatch(orderFail(error));
      });
  };
};
