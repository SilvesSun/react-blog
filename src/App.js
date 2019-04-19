import React, { Component } from 'react';
import './App.css';
import RouterWrap from "./router";
import {LocaleProvider} from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocaleProvider locale={zhCN}>
        <RouterWrap/>
        </LocaleProvider>
      </div>
    );
  }
}

export default  App;
