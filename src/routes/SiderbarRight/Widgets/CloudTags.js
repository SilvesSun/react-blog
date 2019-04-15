import React, {Component} from 'react';
import './CloudTags.less'
import {Icon} from "antd";

export default class CloudTags extends Component{
  state = {
    fontSize: 10,
  };

  static getRandomColor(){
    return '#'+('00000'+ (Math.random()*0x1000000<<0).toString(16)).substr(-6);
  }

  getFontSize(elem) {
    let valref = elem.getAttribute('valref');
    let style = elem.style;
    let total = 100;
    let refSize = Math.round((valref / total) * valref );
    style.fontSize = (refSize > 4 ? refSize : 4) + 'px'
  }

  render() {
    return (
      <div className="cloud-tag blog-item hvr-float-shadow">
        <p className='sidebar-title'><Icon type="tags" />标签云</p>
        <div className="tagBall">
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}} valref="30" ref={(a)=>this.getFontSize(a)}>WAXES</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}} valref="16" ref={(a)=>this.getFontSize(a)}>3D标签云</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}} valref="33" ref={(a)=>this.getFontSize(a)}>WAXES</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}} valref="9">3D标签云</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}} valref="10">WAXES</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>3D标签云</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>WAXES</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>3D标签云</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>WAXES</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>3D标签云</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>WAXES</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>3D标签云</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>WAXES</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>3D标签云</a>
          <a className="tag" href="#" style={{color: CloudTags.getRandomColor()}}>WAXES</a>
        </div>
      </div>
    )
  }

}
