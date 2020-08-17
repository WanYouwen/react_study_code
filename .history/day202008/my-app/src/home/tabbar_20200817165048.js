import { TabBar } from 'antd-mobile';
import React from 'react';
let imgUrl = [
  {
    img:
      'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
  },
  {
    img:
      'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
  },
  {
    img:
      'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
  },
  {
    img:
      'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
  },
  {
    img:
      'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
  },
  {
    img:
      'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
  },
];

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    let selectedTab = this.props.location.pathname;

    let reg = /^\//;
    let routerName = selectedTab.replace(reg, '');
    console.log(routerName, 'routerName');
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
      imgUrl,
    };
  }

  render() {
    console.log(this.state, 'state');
    console.log(this.props, '路由路径');
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#999"
          tintColor="#000"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={this.state.hidden}>
          <TabBar.Item
            title="首页"
            key="Home"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: this.state.imgUrl[0].img,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: this.state.imgUrl[1].img,
                }}
              />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              this.props.history.push('/home');
            }}
            data-seed="logId"></TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: this.state.imgUrl[2].img,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: this.state.imgUrl[3].img,
                }}
              />
            }
            title="分类"
            key="classify"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              this.props.history.push('/about');
            }}
            data-seed="logId1"></TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: this.state.imgUrl[4].img,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background: this.state.imgUrl[5].img,
                }}
              />
            }
            title="购物车"
            key="car"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
              this.props.history.push('/car');
            }}></TabBar.Item>
          <TabBar.Item
            icon={{
              uri: this.state.imgUrl[6].img,
            }}
            selectedIcon={{
              uri: this.state.imgUrl[7].img,
            }}
            title="我的易果"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
              this.props.history.push('/mine');
            }}></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample;
