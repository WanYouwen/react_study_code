import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//引入全局样式重置文件

import 'styles/reset.css';

// 引入antd mobild  样式文件

import 'antd-mobile/dist/antd-mobile.css';

import { BrowserRouter as Router } from 'react-router-dom';

import store from 'store';

import { Provider } from 'react-redux';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
