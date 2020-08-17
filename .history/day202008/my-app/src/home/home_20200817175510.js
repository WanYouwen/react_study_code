import SearchBarExample from '../commen/Navbar';
import React, { Component } from 'react';
import Banner from '../commen/banner';

class Homepage extends Component {
  render() {
    return (
      <div>
        <SearchBarExample></SearchBarExample>
        <Banner></Banner>
      </div>
    );
  }
}

export default Homepage;
