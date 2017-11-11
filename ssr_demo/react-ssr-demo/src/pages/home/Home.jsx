import React, { Component } from 'react';

import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props) {
    super(props);
    // 初始化state
    this.state = {
    };
  }
  render() {
    return <div>Home Page</div>;
  }
}

export default connect(state => {
  return {
    name: state.name
  };
})(HomePage);
