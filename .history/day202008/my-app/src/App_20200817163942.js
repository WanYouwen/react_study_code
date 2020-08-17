import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home/index';

export default function App() {
  return (
    <Switch>
      {/* componets 写在路由标签里面 ，后面做路由跳转的时候可以直接拿到 props.history */}
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/car" component={ShopCar}></Route>
      <Route path="/users" component={Mine}></Route>
    </Switch>
  );
}

function About() {
  return <h2>About</h2>;
}

function Mine() {
  return <h2>Users</h2>;
}
function ShopCar() {
  return <div>ShopCar</div>;
}
