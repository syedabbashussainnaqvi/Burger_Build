import React, { Component } from "react";
import Order from "../../components/Checkout/Order/Order";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/index";
class Orders extends Component {
  componentDidMount() {
    this.props.getOrders(this.props.token, this.props.userId);
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
    userId: state.auth.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (token, userId) =>
      dispatch(actionCreator.getOrderFromServerAsync(token, userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
