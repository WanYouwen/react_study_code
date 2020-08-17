import React, { Component } from 'react';

import { HomeContainer } from 'pages/home/homeContainer';
import AppTabBar from 'components/common/AppTabBar';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <AppTabBar {...this.props}></AppTabBar>
      </HomeContainer>
    );
  }
}

export default Home;
