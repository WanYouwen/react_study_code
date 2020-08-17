import React, { Component } from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';

import {
  CategoryContainer,
  CategoryHeader,
  HeaderContainer,
  NavItem,
  NavSlider,
  RouterContainer,
} from 'pages/category/StyleCategoryComponent';

import search from 'images/search.png';

import { SearchContainer, SearchContent } from 'components/common/search';

import CategoryContent from './CategoryContent';

import CategoryFoodMaterial from './CategoryFoodMaterial';
import { Route, Link, Switch } from 'react-router-dom';

import {
  CSSTransition,
  TransitionGroup,
  Transition,
} from 'react-transition-group';

import 'styles/animate.css';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: true,
    };
  }
  style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  NavItemChange(directive) {
    if (directive === 'left') {
      this.setState({
        pos: true,
      });
    } else {
      this.setState({
        pos: false,
      });
    }
  }
  render() {
    let { pos } = this.state;
    return (
      <CategoryContainer>
        <CategoryHeader>
          <HeaderContainer>
            <NavItem
              onClick={this.NavItemChange.bind(this, 'left')}
              active={pos}>
              <Link to="/category/classify"> 分类 </Link>
            </NavItem>
            <NavItem
              onClick={this.NavItemChange.bind(this, 'right')}
              active={!pos}>
              <Link to="/category/material"> 食材 </Link>
            </NavItem>
            <NavSlider pos={pos}></NavSlider>
          </HeaderContainer>
        </CategoryHeader>
        <SearchContainer>
          <SearchContent style={this.style} background="#efefef">
            <img src={search} />
            <InputItem placeholder="controled input">受控组件</InputItem>
            {/* <span>想吃什么请搜索,比如:川菜</span> */}
          </SearchContent>
        </SearchContainer>
        <RouterContainer>
          <Route
            path="/category/classify"
            exact
            children={() => <CategoryContent pos={pos} />}></Route>
          <Route
            path="/category/material"
            exact
            children={() => <CategoryFoodMaterial pos={!pos} />}></Route>
        </RouterContainer>
      </CategoryContainer>
    );
  }
}
