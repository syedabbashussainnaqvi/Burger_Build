import * as actionType from "../actions/actionType";
import Axios from "../../axios-order";
export const orderPass = (id, orderDetail) => {
  return {
    type: actionType.purchaseBurgerPass,
    orderDetail: orderDetail,
    id: id,
  };
};

export const orderFail = (error) => {
  return {
    type: actionType.purchaseBurgerFail,
    error: error,
  };
};

export const setSuccessOrderFlag = () => {
  return {
    type: actionType.successOrderFlag,
  };
};

export const orderPassAsync = (orderDetail) => {
  return (dispatch) => {
    Axios.post("/orders.json", orderDetail)
      .then((respone) => {
        dispatch(orderPass(respone.data, orderDetail));
      })
      .catch((error) => {
        dispatch(orderFail(error));
      });
  };
};

export const getOrderFromServer = (orderList) => {
  return {
    type: actionType.getOrderFromServer,
    orderFromServer: orderList,
  };
};
export const getOrderFromServerAsync = () => {
  return (dispatch) => {
    Axios.get("/orders.json").then((request) => {
      dispatch(getOrderFromServer(request.data));
    });
  };
};
