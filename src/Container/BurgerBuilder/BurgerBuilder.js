import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from "../../components/Burger/BurgerControls/BurgerControl";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import AuthContext from "../../Context/Auth-Context";
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
    this.showOrderHandler = this.showOrderHandler.bind(this);
  }
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0,
    },
    Price: 200,
    showOrder: false,
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

  showOrderHandler() {
    this.setState({
      showOrder: !this.state.showOrder,
    });
  }
  render() {
    console.log("burgerBuilder Render");
    return (
      <Auxillary>
        <AuthContext.Provider
          value={{
            showOrder: this.state.showOrder,
            showOrderHandler: this.showOrderHandler,
            ingredients: this.state.ingredients,
            addHandler: this.addHandler,
            removehandler: this.removeHandler,
            price: this.state.Price,
          }}
        >
          <Modal>
            <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
          </Modal>
          <Burger ingredients={this.state.ingredients} />
          <BurgerControl
            addHandler={this.addHandler}
            removeHandler={this.removeHandler}
            ingredients={this.state.ingredients}
            price={this.state.Price}
            showOrderHandler={this.showOrderHandler}
            showOrder={this.state.showOrder}
          />
        </AuthContext.Provider>
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
