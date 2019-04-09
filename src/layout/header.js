import React, {Component} from 'react';
import {Menu} from 'antd';

export default class Header extends Component{
  state = {
    current: 'Home'
  };

  render() {
    return (
      <div id="head-nav">
        <div className="nav-wrap">
          <div className="nav-list-wrap">
            <Menu selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="home">首页</Menu.Item>
              <Menu.Item key="archive">归档</Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}
