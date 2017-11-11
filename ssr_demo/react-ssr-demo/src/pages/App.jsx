import React, { Component } from 'react';

import HomePage from './home/Home';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    // 初始化state
    this.state = {
    };
  }
  render() {
    return (<div>
      I'm {this.props.name}
      <br />
      <HomePage />
    </div>);
  }
}

export default connect(state => {
  return {
    name: state.name
  };
})(App);
