import * as actionType from "../actions/actionType";
const initialState = {
  authSuccess: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.authStart:
      return {
        // email: action.cred.email,
        // password: action.cred.password,
      };
    case actionType.authSuccess:
      break;
    case actionType.authFail:
      break;

    default:
      break;
  }
  return state;
};

export default reducer;
