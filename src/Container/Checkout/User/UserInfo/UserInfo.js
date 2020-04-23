import React, { Component } from "react";
import Button from "../../../../components/UI/Button/Button";
import classes from "./UserInfo.module.css";
import Input from "../../../../components/UI/Input/Input";
import { connect } from "react-redux";
import * as orderActionCreator from "../../../../store/actions/index";

class UserInfo extends Component {
  state = {
    orderForm: {
      name: {
        inputtype: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        rules: {
          minLength: 5,
        },
      },
      email: {
        inputtype: "input",
        elementConfig: {
          placeholder: "Your Email",
          type: "text",
        },
        value: "",
      },
      street: {
        inputtype: "input",
        elementConfig: {
          placeholder: "Your Street",
          type: "text",
        },
        value: "",
      },
      postalCode: {
        inputtype: "input",
        elementConfig: {
          placeholder: "Your Postal Code",
          type: "text",
        },
        value: "",
      },
      deliveryMethod: {
        inputtype: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "Medium", displayValue: "Medium" },
          ],
        },
        value: "Fastest",
      },
    },
  };

  validityHandle = (value, identifier) => {
    //Can be done later
  };

  inputHandler = (event, identifier) => {
    console.log(event.target.value + " " + identifier);
    const updateOrder = { ...this.state.orderForm }; //this will not create deep clone it will give access only to direct values not nested values
    const propertyInOrder = { ...updateOrder[identifier] };
    propertyInOrder.value = event.target.value;
    updateOrder[identifier] = propertyInOrder;
    this.setState({
      orderForm: updateOrder,
    });
  };

  orderHandler = (event) => {
    event.preventDefault();

    const orderDetail = {
      ingredients: this.props.ingredients,
      address: this.state.orderForm.street.value,
      name: this.state.orderForm.name.value,
      email: this.state.orderForm.email.value,
      price: this.props.price,
      method: this.state.orderForm.deliveryMethod.value,
    };

    this.props.orderBurger(orderDetail);

    // if (this.props.successFlag) {
    //   this.props.setSuccessOrderFlag();
    //   this.props.history.push({ pathname: "/" });
    // } else {
    //   window.alert("Something wrong in error");
    // }

    // Axios.post("/orders.json", orderDetail)
    //   .then((respone) => {
    //     console.log("Data Submitted");
    //     this.props.history.push({ pathname: "/" });
    //   })
    //   .catch((error) => {
    //     console.log("Error Occur", error);
    //   });
  };

  render() {
    const inputs = Object.keys(this.state.orderForm).map((entry, index) => {
      return (
        <Input
          key={index}
          inputtype={this.state.orderForm[entry].inputtype}
          elementConfig={this.state.orderForm[entry].elementConfig}
          changeHandler={(event) => {
            this.inputHandler(event, entry);
          }}
        />
      );
    });

    return (
      <div className={classes.UserInfo}>
        <h2>Enter User Info</h2>
        <form onSubmit={this.orderHandler}>
          {inputs}
          <Button type="success">Order</Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.price,
    successFlag: state.order.successFlag,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: (orderDetail) =>
      dispatch(orderActionCreator.orderPassAsync(orderDetail)),
    setSuccessOrderFlag: () =>
      dispatch(orderActionCreator.setSuccessOrderFlag()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
