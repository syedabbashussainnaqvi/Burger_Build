import * as actionType from "./actionType";
import Axios from "axios";

/***************************************************Sign In Process************************************************************************ */
export const authStart = () => {
  return {
    type: actionType.authStart,
  };
};

export const authSuccess = (data) => {
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

//main function that we are calling from the application
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
        const expireTime = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expireTime);
        localStorage.setItem("userId", response.data.localId);
        dispatch(timeOut(response.data.expiresIn));
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};

/*******************************************************LogOut Process******************************************************************** */

export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
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
/****************************************************Checking Session*********************************************************************** */
// fucntion to check for session if token is present then we dont ask user to sign in again
export const authCheckSession = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        console.log("nested else ");
        dispatch(logOut());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess({ idToken: token, localId: userId }));

        dispatch(
          timeOut(expirationDate.getTime() - new Date().getTime() / 1000) //javascript gives data in miliseconds so we are dividing by 1000 to convert iit to seconds
        );
      }
    } else {
      console.log("Main else ");
      dispatch(logOut());
    }
  };
};
