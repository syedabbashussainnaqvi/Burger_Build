import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from "../../components/Burger/BurgerControls/BurgerControl";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
  };
  render() {
    console.log("burgerBuilder Render");
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControl />
        <p>Checkout</p>
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
