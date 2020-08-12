import React,{Component}from 'react'

import {
  HotContainer,
  HotTitle
}from 'pages/home/hot/styleHotComponent'

import { Grid } from 'antd-mobile';

import getHome from 'utils/store-getter/getHome'

class Hot extends Component{
  componentWillMount(){
    this.props.getHot()
  }
  render(){
    let data = this.props.hot && this.props.hot.map((_val, i) => ({
      icon: _val.img,
      text: _val.title,
    }))
    data&&data.push({
      text: "更多..."
    })
    return (
      <HotContainer>
        <HotTitle>
          热门分类
        </HotTitle>
          <Grid 
            data={data}
            activeStyle={false}
            hasLine = {false}
            onClick = { el => {
              console.log('el',el)
              this.props.history.push('/list')
            }}
          /> 
      </HotContainer>
    )
  }
}


export default getHome(Hot) 