import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd-mobile';
import Home from './home/index';
class Sidebar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

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
