import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
import Checkout from "./Container/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./Container/Orders/Orders";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/order" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
