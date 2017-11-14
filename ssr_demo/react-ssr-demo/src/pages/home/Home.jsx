import React, { Component } from 'react';

import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props) {
    super(props);
    // 初始化state
    this.state = {
    };
  }
  handleBtnClick() {
    alert('hahha');
  }
  render() {
    return (
      <div>
        Home Pageafdfdsafsdafsadfsafasfsadfsfsafsaf
        <span>我发大水范德萨发生大发生大发</span>
        <button onClick={this.handleBtnClick}>点击我试试</button>
      </div>
    );
  }
}

export default connect(state => {
  return {
    name: state.name
  };
})(HomePage);
