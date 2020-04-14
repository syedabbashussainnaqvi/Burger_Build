import React, { Component } from "react";
import Button from "../../../../components/UI/Button/Button";
import classes from "./UserInfo.module.css";
import Axios from "../../../../axios-order";

class UserInfo extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  streetHandler = (event) => {
    this.setState({
      address: {
        street: event.target.value,
      },
    });
  };
  postalCodeHandler = (event) => {
    this.setState({
      address: {
        postalCode: event.target.value,
      },
    });
  };
  orderHandler = (t1, t2) => {
    console.log("fuck");

    const orderDetail = {
      ingredients: this.props.ingredients,
      address: this.state.address,
      name: this.state.name,
      email: this.state.email,
      price: this.props.price,
    };
    Axios.post("/orders.json", orderDetail)
      .then((respone) => {
        console.log("Data Submitted");
        this.props.history.push({ pathname: "/" });
      })
      .catch((error) => {
        console.log("Error Occur", error);
      });
  };

  render() {
    return (
      <div className={classes.UserInfo}>
        <h2>Enter User Info</h2>

        <input
          type="text"
          name="name"
          onChange={this.nameHandler}
          placeholder="Enter Your Name"
        />
        <input
          type="text"
          name="email"
          onChange={this.emailHandler}
          placeholder="Enter Your Email"
        />
        <input
          type="text"
          name="street"
          onChange={this.streetHandler}
          placeholder="Enter Street No"
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Enter Your Postal code"
          onChange={this.postalCodeHandler}
        />
        <Button type="success" postOrderHandler={this.orderHandler}>
          Order
        </Button>
      </div>
    );
  }
}
export default UserInfo;
