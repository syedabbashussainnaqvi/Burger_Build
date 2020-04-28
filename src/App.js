import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
import Checkout from "./Container/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./Container/Orders/Orders";
import Auth from "./Container/Auth/Auth";
import { connect } from "react-redux";
import LogOut from "./Container/Auth/Logout/logout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout token={this.props.token}>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/order" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={LogOut} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(App);
