// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import './App.css';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

// 首先我们需要导入一些组件...
import { Router, Route, Switch } from 'react-router';
import About from './about/about';

const { SubMenu } = Menu;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div
        style={{
          width: !this.state.collapsed ? 256 : 80,
          height: '100%',
          background: '#000c17',
        }}>
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{
            marginBottom: 16,
            width: '100%',
          }}>
          {/* {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )} */}
          React后台管理
        </Button>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/inbox">Inbox</Link>
          </li> */}
        </ul>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            工厂资源
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

class App extends Component {
  style = {
    height: '100%',
  };
  render() {
    return (
      <Switch>
        <Route path="/" component={App}>
          <div style={this.style}>
            {/* 这是app首页 */}
            <Route path="about" component={About} />
            {/* <Route path="inbox" component={Inbox} /> */}
            {/* <Button type="primary">Button</Button> */}
            {/* <Sidebar /> */}
          </div>
        </Route>
      </Switch>
    );
  }
}

export default App;
