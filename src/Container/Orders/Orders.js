import React, { Component } from "react";
import Order from "../../components/Checkout/Order/Order";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
class Orders extends Component {
  componentDidMount() {
    this.props.getOrders(this.props.token);
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
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (token) =>
      dispatch(actionCreator.getOrderFromServerAsync(token)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
