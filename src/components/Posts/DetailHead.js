import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../SubHead/SubHead.less";


export default class DetailHead extends Component{
  render() {

    let to_url = `/blogs/type/${this.props.typeid}/`
    return (
      <div  id='sub-head-wrap'>
        <div className='detail-menu'>
          <span>当前位置 ></span>
          <Link to= {to_url}>
              {this.props.title}
          </Link>
        </div>
      </div>
    )
  }
}
