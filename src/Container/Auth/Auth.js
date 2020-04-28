import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
import { Redirect } from "react-router-dom";
class Auth extends Component {
  state = {
    control: {
      email: {
        inputtype: "input",
        elementConfig: {
          placeholder: "Your Email",
          type: "text",
        },
        abbas: {
          name: "abbas",
        },

        value: "",
      },
      password: {
        inputtype: "input",
        elementConfig: {
          placeholder: "Your Password",
          type: "text",
        },
        abbas: {
          name: "abbas",
        },
        value: "",
      },
    },
    signIn: true,
  };

  inputHandler = (event, identifier) => {
    const updateControl = { ...this.state.control }; //this will not create deep clone it will give access only to direct values not nested values
    const propertyInOrder = { ...updateControl[identifier] };

    const abb = { ...propertyInOrder.abbas };
    abb.name = event.target.value;
    propertyInOrder.abbas = abb;

    propertyInOrder.value = event.target.value;
    updateControl[identifier] = propertyInOrder;
    this.setState({
      control: updateControl,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.auth(
      this.state.control.email.value,
      this.state.control.password.value,
      this.state.signIn
    );
    //ingredient ki length dehkni ha
  };
  switchHandler = (t, t1) => {
    this.setState((prevState) => {
      return { signIn: !prevState.signIn };
    });
  };

  render() {
    const inputs = Object.keys(this.state.control).map((entry, index) => {
      return (
        <Input
          key={index}
          inputtype={this.state.control[entry].inputtype}
          elementConfig={this.state.control[entry].elementConfig}
          changeHandler={(event) => {
            this.inputHandler(event, entry);
          }}
        />
      );
    });

    let isAuth = null; //if user is authticated then redirecting user to root page
    if (this.props.token) {
      if (this.props.price > 200) {
        isAuth = <Redirect to="/checkout" />;
      } else {
        isAuth = <Redirect to="/" />;
      }
    }
    return (
      <div className={classes.Auth}>
        {isAuth}
        <form onSubmit={this.submitHandler}>
          {inputs}
          <Button type="success">SUBMIT</Button>
          <Button type="danger" showOrderHandler={this.switchHandler}>
            Switch to {this.state.signIn ? "SignUp" : "SignIn"}
          </Button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    auth: (email, password, isSignIn) =>
      dispatch(actionCreator.auth(email, password, isSignIn)),
  };
};
const mapStateToProps = (state) => {
  return {
    token: state.auth.token != null,
    price: state.burgerBuilder.price,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
