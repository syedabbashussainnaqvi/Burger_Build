import React from "react";
import { Component } from "react";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import UserInfo from "./User/UserInfo/UserInfo";
class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 2,
      bacon: 1,
      meat: 3,
    },
    price: 0,
  };
  nextPage = (t, t1) => {
    this.props.history.push({ pathname: this.props.match.url + "/userInfo" });
  };
  cancelOrder = () => {
    this.props.history.goBack();
  };
  componentDidMount() {
    const url = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of url.entries()) {
      // param will be equal to ["salad","1"]   url.entries is a iterator
      if (param[0] === "price") {
        this.setState({
          price: param[1],
        });
      } else {
        ingredients[param[0]] = +param[1]; //+ is added to convert it to a number
      }
    }
    this.setState({
      ingredients: ingredients,
    });
  }
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancelOrder={this.cancelOrder}
          nextPage={this.nextPage}
        />{" "}
        <Route
          path="/checkout/userInfo"
          render={() => (
            <UserInfo
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...this.props}
            />
          )}
        />
      </div>
    );
  }
}
export default Checkout;
