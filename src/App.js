import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  randomFunction() {
    let proxyCounter = this.state.counter;
    if (proxyCounter !==0) {
      this.setState({counter: this.state.counter - 1})
    } else {
      console.log("Counter @ 0");
    }
  }

  render() {
    return (
      <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
      <button data-test="increment-button"
      onClick={() => this.setState({ counter: this.state.counter + 1})}>
      Increment counter
      </button>
      <button data-test="decrement-button"
      onClick={this.randomFunction.bind(this)}> 
      Decrement Counter
      </button>
      </div>
    );
  }
}

export default App;
