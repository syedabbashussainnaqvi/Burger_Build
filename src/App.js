import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
import Checkout from "./Container/Checkout/Checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import Orders from "./Container/Orders/Orders";
import Auth from "./Container/Auth/Auth";
import { connect } from "react-redux";
import LogOut from "./Container/Auth/Logout/logout";
import * as actionCreator from "./store/actions/index";
class App extends Component {
  componentDidMount() {
    this.props.authSessionCheck();
  }
  render() {
    //this process is called guarding the routes
    let changeRouteOnAuth = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.token) {
      changeRouteOnAuth = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/order" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={LogOut} />
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
