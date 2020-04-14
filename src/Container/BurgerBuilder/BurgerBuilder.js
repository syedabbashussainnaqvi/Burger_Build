import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BurgerControl from "../../components/Burger/BurgerControls/BurgerControl";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import AuthContext from "../../Context/Auth-Context";
import Spinner from "../../components/UI/Spinner/Spinner";
import Axios from "../../axios-order";
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
    this.postOrderHandler = this.postOrderHandler.bind(this);
  }
  state = {
    ingredients: null,
    Price: 200,
    showOrder: false,
    posted: false,
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

    for (let i in this.state.ingredients) {
      queryparam.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryparam.push("price=" + this.state.Price);

    const queryString = queryparam.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  }
  componentDidMount() {
    Axios.get("/Ingrdients.json")
      .then((response) => {
        this.setState({
          ingredients: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let spinner = null;
    if (this.state.posted) {
      spinner = <Spinner />;
    }
    let dataLoaded = <h1>Loading Data......</h1>;
    if (this.state.ingredients) {
      dataLoaded = (
        <AuthContext.Provider
          value={{
            showOrder: this.state.showOrder,
            showOrderHandler: this.showOrderHandler,
            ingredients: this.state.ingredients,
            addHandler: this.addHandler,
            removehandler: this.removeHandler,
            price: this.state.Price,
            posted: this.state.posted,
            postOrderHandler: this.postOrderHandler,
          }}
        >
          <Modal>
            <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
          </Modal>
          {spinner}
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
      );
    }
    return <Auxillary>{dataLoaded}</Auxillary>;
  }
}

export default BurgerBuilder;
