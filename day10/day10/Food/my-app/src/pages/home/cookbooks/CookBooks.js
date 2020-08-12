import React, { Component } from 'react'
import { Header } from 'components/common/Head';
import Banner from 'pages/home/banner/Banner';
import { SearchContainer,SearchContent } from 'components/common/search';
import Hot from 'pages/home/hot'
import Delicacy from 'pages/home/good_food_list'

import search from 'images/search.png'
export default class CookBooks extends Component {
  style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  render() {
    return (
      <div>
         {true || <Header>菜谱大全</Header>}
          <main>
            <Banner></Banner>
            <SearchContainer>
              <SearchContent 
                style = { this.style }
                width = 'true'
              >
                <img src = {search}/>
                <span>想吃什么请搜索,比如:川菜</span>
              </SearchContent>
            </SearchContainer>
            <Hot {...this.props}></Hot>
            <Delicacy></Delicacy>
          </main>
      </div>
    )
  }
}
