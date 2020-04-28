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

export const orderPassAsync = (orderDetail, token) => {
  return (dispatch) => {
    Axios.post("/orders.json?auth=" + token, orderDetail)
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
export const getOrderFromServerAsync = (token, userId) => {
  return (dispatch) => {
    console.log(userId);
    const queryParam =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';

    Axios.get("/orders.json" + queryParam).then((request) => {
      dispatch(getOrderFromServer(request.data));
    });
  };
};
