import React,{Component} from 'react'
import { TabBar } from 'antd-mobile';

import cookbook from 'images/cookbook.png'
import cookbookActive from 'images/cookbook-active.png'

import location from 'images/location.png'
import locationActive from 'images/location-active.png'

import menu from 'images/menu.png'
import menuActive from 'images/menu-active.png'

import more from 'images/more.png'
import moreActive from 'images/more-active.png'


import CookBooks from 'pages/home/cookbooks/CookBooks';
import Category from 'pages/category/Category'

import List from 'pages/list'
import Mine from 'pages/mine'

class AppTabBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'cookboos',
      fullScreen: true,
    };
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#999"
          tintColor="#000"
          barTintColor="white"
        >
          <TabBar.Item
            title="大全"
            key="大全"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookbook}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${cookbookActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cookboos'}
            onPress={() => {
              this.setState({
                selectedTab: 'cookboos',
              });
              this.props.history.push('/home')
            }}
            data-seed="logId"
          >
            <CookBooks {...this.props}/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="分类"
            key="分类"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
              this.props.history.push('/category/classify')
            }}
            data-seed="logId1"
          >
           <Category/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="列表"
            key="列表"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
              this.props.history.push('/list')
            }}
          >
            <List {...this.props}></List>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${more}` }}
            selectedIcon={{ uri: `${moreActive}` }}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
              this.props.history.push('/mine')
            }}
          >
            <Mine></Mine>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default AppTabBar