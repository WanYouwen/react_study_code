import React,{Component}from 'react'

import {
  HotContainer,
  HotTitle
}from 'pages/home/hot/styleHotComponent'

import {
  DelicacyUl,
  DelicacyLi
}from 'pages/home/good_food_list/styleDelicacyComponent'


import getHome from 'utils/store-getter/getHome'


const DelicacyItem = (props) => {
  return (
    <DelicacyLi>
      <a>
        <img src = {props.img}/>
        <h3> {props.name} </h3>
        <p>
          <span> {props.all_click} 浏览</span>
          <span> { props.favorites } 收藏</span>
        </p>
      </a>
    </DelicacyLi>
  )
}

class Delicacy extends Component{
  componentWillMount(){
    this.props.getDelicacy()
  }
  renderItem(){
    return this.props.delicacy && this.props.delicacy.slice(0,20).map(item => {
      return <DelicacyItem key = {item.id} {...item}></DelicacyItem>
    })
  }
  render(){
    return (
      <HotContainer>
        <HotTitle>
          精品好菜
        </HotTitle>
         <DelicacyUl>
           {this.renderItem()}
         </DelicacyUl>
      </HotContainer>
    )
  }
}


export default getHome(Delicacy) 