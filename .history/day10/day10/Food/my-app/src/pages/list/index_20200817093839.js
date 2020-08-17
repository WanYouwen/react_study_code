import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { ListContainer } from './styleListComponent';

import { PullToRefresh, ListView, Button, NavBar, Icon } from 'antd-mobile';

import getList from 'utils/store-getter/getList';

// const data = [
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//     title: 'Meet hotel',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//     title: 'McDonald\'s invites you',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//     title: 'Eat the week',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
// ];
const NUM_ROWS = 20; // 一页 20 条
let pageIndex = 0; // 分页

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${pIndex * NUM_ROWS + i}`);
  }
  return dataArr;
}

class List extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    console.log(this.props, 'this.props.delicacy');
    if (nextProps.delicacy !== this.props.delicacy) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.delicacy),
      });
    }
  }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei,
        refreshing: false,
        isLoading: false,
      });
    }, 1500);
  }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = [...this.rData, ...genData(++pageIndex)];
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  };

  render() {
    const data = this.props.delicacy && this.props.delicacy;
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    if (!data) return;
    let index = data.length - 1;

    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--]; //obj就是  data  中每一个
      return (
        <div
          key={rowID}
          style={{
            padding: '0 15px',
            backgroundColor: 'white',
          }}>
          <div
            style={{
              height: '50px',
              lineHeight: '50px',
              color: '#888',
              fontSize: '18px',
              borderBottom: '1px solid #ddd',
            }}>
            {obj.name}
          </div>
          <div
            style={{
              display: '-webkit-box',
              display: 'flex',
              padding: '15px',
            }}>
            <img
              style={{ height: '63px', width: '63px', marginRight: '15px' }}
              src={obj.img}
              alt=""
            />
            <h3>{obj.burdens}</h3>
            <p>
              <span>{obj.all_click} 浏览量</span>
              <span>{obj.favorites} 收藏量</span>
            </p>
          </div>
        </div>
      );
    };
    return (
      <ListContainer>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            console.log(this.props);
            this.props.history.go(-1);
          }}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}>
          {' '}
          主食{' '}
        </NavBar>
        <ListView
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={(el) => (this.lv = el)}
          dataSource={this.state.dataSource}
          renderFooter={() => (
            <div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>
          )}
          renderRow={row}
          renderSeparator={separator} // 列表中每一个的间隔
          useBodyScroll={this.state.useBodyScroll}
          style={
            this.state.useBodyScroll
              ? {}
              : {
                  height: this.state.height,
                  border: '1px solid #ddd',
                  margin: '5px 0',
                }
          }
          pullToRefresh={
            <PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </ListContainer>
    );
  }
}

export default getList(List);
