import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
import * as actionType from "../../store/actions/actionType";
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
  };

  inputHandler = (event, identifier) => {
    console.log(event.target.value + " " + identifier);
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
      this.state.control.password.value
    );
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

    return (
      <div className={classes.Auth}>
        <form onSubmit={this.submitHandler}>
          {inputs}
          <Button type="success">SUBMIT</Button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    auth: (email, password) => dispatch(actionCreator.auth(email, password)),
  };
};
export default connect(null, mapDispatchToProps)(Auth);
