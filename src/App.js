import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    }
  }

  decrementFunction() {
    let proxyCounter = this.state.counter;
    if (proxyCounter !==0) {
      this.setState({counter: this.state.counter - 1})
    } else {
      this.setState({error: true})

    }
  }

  incrementFunction() {
    this.setState(({counter: this.state.counter + 1, error: false}))
}

  render() {
    return (
      <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
      <button data-test="increment-button"
      onClick={this.incrementFunction.bind(this)}>
      Increment Counter
      </button>
      <button data-test="decrement-button"
      onClick={this.decrementFunction.bind(this)}>
      Decrement Counter
      </button>
      <div data-test="error-div" className={`error-${this.state.error}`}>The counter cannot go below zero.</div>
      </div>
    );
  }
}

export default App;
