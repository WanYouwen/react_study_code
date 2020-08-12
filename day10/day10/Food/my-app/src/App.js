import React, { Component } from 'react';

import Home from 'pages/home'
import Map from 'pages/map'
import Mine from 'pages/mine'
import List from 'pages/list'

import {
  Route,
  Switch,
  Redirect
}from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <Switch>
          <Route  to="/" component = {Home} exact></Route>
          <Route path="/home" component = {Home}></Route>
          <Route path="/list" component = {List}></Route>
          <Route path="/map" component = {Map}></Route>
          <Route path="/mine" component = {Mine}></Route>
      </Switch>
    );
  }
}

export default App;
