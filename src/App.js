import React, { Component } from 'react';
import './App.less';
import {LocaleProvider} from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocaleProvider locale={zhCN}>
          <DefaultLayout/>
        </LocaleProvider>
      </div>
    );
  }
}

export default  App;
