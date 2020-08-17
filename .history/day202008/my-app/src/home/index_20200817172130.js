import React, { Component } from 'react';
import Tabbar from './tabbar';
class Home extends Component {
  render() {
    return (
      <div>
        <Tabbar {...this.props}></Tabbar>
      </div>
    );
  }
}

export default Home;
