import * as actionType from "./actionType";
import Axios from "axios";
export const authStart = () => {
  return {
    type: actionType.authStart,
  };
};

export const authSuccess = (data) => {
  return {
    type: actionType.authSuccess,
    data: data,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.authFail,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    dispatch(authStart());
    Axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOtL-XYqFRDrmmMBUZu9uV8w4Xfhft2BY",
      authData
    )
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};
