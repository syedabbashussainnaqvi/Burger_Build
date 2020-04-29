import React, { Component } from "react";
// ImportComponent shpuld be a functional refernece
const asyncComponent = (ImportComponent) => {
  return class extends Component {
    state = {
      component: null, //will be set equal to dynamic loaded component
    };
    componentDidMount() {
      ImportComponent().then((cmp) => {
        this.setState({
          component: cmp.default,
        });
      });
    }
    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
