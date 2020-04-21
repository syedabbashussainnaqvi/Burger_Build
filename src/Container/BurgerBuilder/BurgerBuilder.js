import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from "../../components/Burger/BurgerControls/BurgerControl";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import AuthContext from "../../Context/Auth-Context";
import Spinner from "../../components/UI/Spinner/Spinner";
import Axios from "../../axios-order";
import * as burgerBuilderActionCreator from "../../store/actions/index";
import { connect } from "react-redux";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.showOrderHandler = this.showOrderHandler.bind(this);
    this.postOrderHandler = this.postOrderHandler.bind(this);
  }
  state = {
    showOrder: false,
    posted: false,
  };

  addHandler(type) {
    this.props.addIngredient(type.toLowerCase());
    // const ingred = { ...this.state.ingredients };
    // const price = this.state.Price + Ingredients_Price[type.toLowerCase()];
    // ingred[type.toLowerCase()] += 1;
    // this.setState({
    //   ingredients: ingred,
    //   Price: price,
    // });
  }
  removeHandler(type) {
    if (this.props.ingredients[type.toLowerCase()] === 0) {
      window.alert("Not Possible " + type + " is already 0");
      console.log("Not Possible");
    } else {
      this.props.removeIngredient(type.toLowerCase());
    }
  }

  showOrderHandler() {
    //this  will show modal.js dile jsx
    this.setState({
      showOrder: !this.state.showOrder,
    });
  }
  postOrderHandler(typr, type) {
    this.setState({
      showOrder: type,
      posted: typr,
    });

    const queryparam = [];

    // for (let i in this.props.ingredients) {
    //   queryparam.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.props.ingredients[i])
    //   );
    // }

    Object.keys(this.props.ingredients).map((i) =>
      queryparam.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.props.ingredients[i])
      )
    );

    queryparam.push("price=" + this.props.price);

    const queryString = queryparam.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  }
  componentDidMount() {
    this.props.initIngredients();
    // Axios.get("/Ingrdients.json")
    //   .then((response) => {
    //     this.setState({
    //       ingredients: response.data,
    //     });
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    let spinner = null;
    if (this.state.posted) {
      spinner = <Spinner />;
    }
    let dataLoaded = <h1>Loading Data......</h1>;
    if (this.props.ingredients) {
      dataLoaded = (
        <AuthContext.Provider
          value={{
            showOrder: this.state.showOrder,
            showOrderHandler: this.showOrderHandler,
            ingredients: this.props.ingredients,
            addHandler: this.addHandler,
            removehandler: this.removeHandler,
            price: this.props.price,
            posted: this.state.posted,
            postOrderHandler: this.postOrderHandler,
          }}
        >
          <Modal>
            <OrderSummary ingredients={this.props.ingredients}></OrderSummary>
          </Modal>
          {spinner}
          <Burger ingredients={this.props.ingredients} />

          <BurgerControl
            addHandler={this.addHandler}
            removeHandler={this.removeHandler}
            ingredients={this.props.ingredients}
            price={this.props.price}
            showOrderHandler={this.showOrderHandler}
            showOrder={this.state.showOrder}
          />
        </AuthContext.Provider>
      );
    }
    return <Auxillary>{dataLoaded}</Auxillary>;
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    price: state.price,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingredientName) =>
      dispatch(burgerBuilderActionCreator.addIngredients(ingredientName)),
    removeIngredient: (ingredientName) =>
      dispatch(burgerBuilderActionCreator.removeIngredients(ingredientName)),
    initIngredients: () =>
      dispatch(burgerBuilderActionCreator.initIngredientsBurgerBuilder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
