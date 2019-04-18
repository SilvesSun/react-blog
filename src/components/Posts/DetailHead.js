import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../SubHead/SubHead.less";


export default class DetailHead extends Component{
  render() {
    return (
      <div  id='sub-head-wrap'>
        <div className='detail-menu'>
          <span>当前位置 ></span>
          <Link to="/">
              文章
          </Link>
          <span> > {this.props.title}</span>
        </div>
      </div>
    )
  }
}
