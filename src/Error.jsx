/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class Error extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Algo deu errado. Por favor, recarregue a página.</div>;
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default Error;
