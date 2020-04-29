import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/index";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const checkoutLazy = asyncComponent(() =>
  import("./Container/Checkout/Checkout")
);
const logoutLazy = asyncComponent(() =>
  import("./Container/Auth/Logout/logout")
);
const orderLazy = asyncComponent(() => import("./Container/Orders/Orders"));
const authLazy = asyncComponent(() => import("./Container/Auth/Auth"));

class App extends Component {
  componentDidMount() {
    this.props.authSessionCheck();
  }
  render() {
    //this process is called guarding the routes
    let changeRouteOnAuth = (
      <Switch>
        <Route path="/auth" component={authLazy} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.token) {
      changeRouteOnAuth = (
        <Switch>
          <Route path="/checkout" component={checkoutLazy} />
          <Route path="/order" component={orderLazy} />
          <Route path="/auth" component={authLazy} />
          <Route path="/logout" component={logoutLazy} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      );
    }

    return (
      <div>
        <Layout token={this.props.token}>{changeRouteOnAuth}</Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authSessionCheck: () => dispatch(actionCreator.authCheckSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
