import * as actionType from "./actionType";
import Axios from "axios";
export const authStart = () => {
  return {
    type: actionType.authStart,
  };
};

export const authSuccess = (data) => {
  console.log(data);
  return {
    type: actionType.authSuccess,
    token: data.idToken,
    userId: data.localId,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.authFail,
    error: error,
  };
};

export const logOut = () => {
  return {
    type: actionType.logOut,
  };
};

export const timeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logOut());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignIn) => {
  return (dispatch) => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    dispatch(authStart());
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOtL-XYqFRDrmmMBUZu9uV8w4Xfhft2BY";
    if (isSignIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOtL-XYqFRDrmmMBUZu9uV8w4Xfhft2BY";
    }
    Axios.post(url, authData)
      .then((response) => {
        dispatch(authSuccess(response.data));
        dispatch(timeOut(response.data.expiresIn));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};
