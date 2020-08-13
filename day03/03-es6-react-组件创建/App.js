// const Component = require('react').Component

import React, { Component } from 'react'; 
import Home from './components/Home';

// console.log(Component) // 类 构造器函数  --->  创建组件的

//低版本： React.createClass
class App extends Component { //props  context  updater
  render() {
    return (
      <div className="App">
        App
        <hr/>
        <Home/>
      </div>
    );
  }
}


// module.exports = App
export default App;
