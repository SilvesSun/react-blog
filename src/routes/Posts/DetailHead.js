import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../../layouts/SubHead/SubHead.less";


export default class DetailHead extends Component{
  // constructor(props){
  //     super(props);
  //     let location=this.props.location.pathname.split('/');
  //     let currentName=location[location.length-1]?location[location.length-1]:'home';
  //     this.state = {
  //         current: currentName,
  //     }
  // }
  //
  // handleClick = (e) => {
  //     this.setState({current: e.key})
  // };

  render() {
    return (
      <div  id='sub-head-wrap'>
        <div className='detail-menu'>
          <span>当前位置 ></span>
          <Link to="/home">
              文章
          </Link>
          <span> > 三数之和</span>
        </div>
      </div>
    )
  }
}
