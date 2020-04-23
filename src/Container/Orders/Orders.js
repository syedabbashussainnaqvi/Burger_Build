import React, { Component } from "react";
import Order from "../../components/Checkout/Order/Order";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    let spin = <p>Loading Orders.....</p>;
    if (this.props.orders) {
      spin = <Order orderDetail={this.props.orders} />;
    }
    return <div>{spin}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.order.OrderFromServer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(actionCreator.getOrderFromServerAsync()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
