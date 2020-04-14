import React from "react";

/**
 * It is a global and can be access anywhere to restrict it we initilize it with somevalues
 * This value can be passed without a long chain of props as we are doing previously
 */
const auth = React.createContext({
  showOrder: false,
  showOrderHandler: () => {}, //the only reason of doing this is to enable editer to do autocompletion suggestion
  ingredients: {},
  addHandler: () => {},
  removehandler: () => {},
  price: 200,
  posted: false,
  postOrderHandler: () => {},
});

export default auth;
