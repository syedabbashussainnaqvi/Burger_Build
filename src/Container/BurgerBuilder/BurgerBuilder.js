import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from "../../components/Burger/BurgerControls/BurgerControl";

const Ingredients_Price = {
  salad: 0.5,
  meat: 1.4,
  cheese: 0.4,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    Price: 200,
  };

  addHandler(type) {
    const ingred = { ...this.state.ingredients };
    const price = this.state.Price + Ingredients_Price[type.toLowerCase()];
    ingred[type.toLowerCase()] += 1;

    this.setState({
      ingredients: ingred,
      Price: price,
    });
  }
  removeHandler(type) {
    const ingred = { ...this.state.ingredients };
    const price = this.state.Price - Ingredients_Price[type.toLowerCase()];
    if (ingred[type.toLowerCase()] === 0) {
      window.alert("Not Possible " + type + " is already 0");
      console.log("Not Possible");
    } else {
      ingred[type.toLowerCase()] -= 1;
      this.setState({
        ingredients: ingred,
        Price: price,
      });
    }
  }
  render() {
    console.log("burgerBuilder Render");
    return (
      <Auxillary>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControl
          addHandler={this.addHandler}
          removeHandler={this.removeHandler}
          ingredients={this.state.ingredients}
          price={this.state.Price}
        />
        <p>Checkout</p>
      </Auxillary>
    );
  }
}

export default BurgerBuilder;