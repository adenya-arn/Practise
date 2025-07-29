import React, { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increament = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increament}>Increament</button>
      </div>
    );
  }
}

export default CounterClass;
