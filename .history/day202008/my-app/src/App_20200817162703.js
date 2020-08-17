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
      <Route path="/about" component={About}></Route>
      <Route path="/users" component={Mine}></Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

function About() {
  return <h2>About</h2>;
}

function Mine() {
  return <h2>Users</h2>;
}
