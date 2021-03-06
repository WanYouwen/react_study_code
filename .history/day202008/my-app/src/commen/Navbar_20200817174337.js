import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { Component } from 'react';
class SearchBarExample extends React.Component {
  state = {
    value: '美食',
  };
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  onChange = (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  };
  render() {
    return (
      <div>
        <SearchBar
          value={this.state.value}
          placeholder="请输入"
          ref={(ref) => (this.autoFocusInst = ref)}
          onSubmit={(value) => console.log(value, 'onSubmit')}
          onClear={(value) => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          showCancelButton
          onChange={this.onChange}
        />
        {/* <SearchBar
          value={this.state.value}
          placeholder="Search"
          onSubmit={(value) => console.log(value, 'onSubmit')}
          onClear={(value) => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          showCancelButton
          onChange={this.onChange}
        /> */}
      </div>
    );
  }
}
export default SearchBarExample;

// ReactDOM.render(<SearchBarExample />, mountNode);
