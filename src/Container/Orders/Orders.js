import React, { Component } from "react";
import Order from "../../components/Checkout/Order/Order";
import Axios from "../../axios-order";
class Orders extends Component {
  state = {
    orders: null,
  };
  componentDidMount() {
    Axios.get("/orders.json").then((request) => {
      console.log(request.data);
      this.setState({
        orders: request.data,
      });
    });
  }
  render() {
    let spin = <p>Loading Orders.....</p>;
    if (this.state.orders) {
      spin = <Order orderDetail={this.state.orders} />;
    }
    return <div>{spin}</div>;
  }
}
export default Orders;
