import * as actionType from "../actions/actionType";
const initialState = {
  token: null,
  userId: null,
  error: null,
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    userId: action.userId,
    error: null,
  };
};
const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const logOut = (state, action) => {
  return {
    ...state,
    token: null,
    userId: null,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.authStart:
      return {};
    case actionType.authSuccess:
      return authSuccess(state, action);
    case actionType.authFail:
      return authFail(state, action);
    case actionType.logOut:
      return logOut(state, action);
    default:
      break;
  }
  return state;
};

export default reducer;
