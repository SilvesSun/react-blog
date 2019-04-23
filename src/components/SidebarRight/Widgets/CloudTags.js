import React, {Component} from 'react';
import './CloudTags.less';
import '../../../common/less/common.less';
import {Icon} from "antd";
import * as axios from 'axios';
import {Link} from "react-router-dom";

export default class CloudTags extends Component{
  constructor(props){
    super(props);
    this.state = {
      types: [],
      blogCount: 0,
    }
  }

  static getRandomColor(){
    return '#'+('00000'+ (Math.random()*0x1000000<<0).toString(16)).substr(-6);
  }

  handleClick(e){
    this.props.history.push(`/blogs/type/${e}/`)
  }

  componentDidMount() {
    let host = global.constants.host;
    axios.get(host + '/type/summary/').then(
      res => {
        let types = res.data.type_summary;
        let blogCount = res.data.blog_count;

        this.setState({
          types: types,
          blogCount: blogCount
        });
      }
    );
  }

  render() {
    return (
      <div className="cloud-tag blog-item hvr-float-shadow" ref={div => this._dom = div}>
        <p className='sidebar-title'><Icon type="tags" />分类</p>
        <div className="tagBall">
          {this.state.types.map((type)=>{
            let refSize = Math.round((type.count / this.state.blogCount)* 100);
            let fontSize =(refSize > 2 ? refSize : 2) + 'px';
            return (
              <Link to={`/blogs/type/${type.tag_id}/`} key={type.tag_id}>
              <span
                key={type.tag_id} className="tag"
                style={{color: CloudTags.getRandomColor(), fontSize: fontSize, backgroundColor: 'rgba(96, 95, 95, 0.4)'}}
                // onClick={this.handleClick.bind(this, type.tag_id)}
                title={type.name}
                typeid = {type.tag_id}
              >{type.name}</span>
              </Link>
            )
          })}

        </div>
      </div>
    )
  }

}
