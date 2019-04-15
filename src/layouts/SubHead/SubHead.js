import React, {Component} from 'react';
import './SubHead.less'
import {Menu} from "antd";
import {Link} from "react-router-dom";

export default class SubHead extends Component{
  constructor(props){
        super(props);
        let location=this.props.location.pathname.split('/');
        let currentName=location[location.length-1]?location[location.length-1]:'home';
        this.state = {
            current: currentName,
        }
    }

    handleClick = (e) => {
        this.setState({current: e.key})
    };

  render() {
    return (
      <div  id='sub-head-wrap'>
        <div id='sub-head'>
          <Menu selectedKeys={[this.state.current]} mode="horizontal" onClick={this.handleClick}>
              <Menu.Item key="home">
                  <Link to="/home">
                      文章
                  </Link>
              </Menu.Item>
              <Menu.Item key="category">
                  <Link to="/home/category">
                      分类
                  </Link>
              </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}
