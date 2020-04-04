import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
class App extends Component {
  render() {
    console.log("App Render");
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
