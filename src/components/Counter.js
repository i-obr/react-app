import React, { Component } from 'react';
import { SubTitle, ContentInner, Button } from '../styled';

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    const { count } = this.state;
    return (
      <ContentInner>
        <SubTitle>Counter</SubTitle>
        <span>{count}</span>
        <Button onClick={this.incrementCounter} increment type="button">
          Increment
        </Button>
        <Button onClick={this.decrementCounter} decrement type="button">
          Decrement
        </Button>
        <Button onClick={this.resetCounter} reset type="button">
          Reset
        </Button>
      </ContentInner>
    );
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  resetCounter = () => {
    this.setState({
      count: 0
    });
  };
}

export default Counter;
