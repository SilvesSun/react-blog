import React, {Component} from 'react';
import './CloudTags.less';
import '../../../common/less/common.less';
import {Icon, Tag} from "antd";
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
    let colorArray = ['blue', 'orange', 'cyan', 'green', 'gold']
    let index = Math.ceil(Math.random()*(colorArray.length));
    return colorArray[index];
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
            // let refSize = Math.round((type.count / this.state.blogCount)* 100);
            // let fontSize =(refSize > 10 ? refSize : 10) + 'px';
            return (
              <Link to={`/type/${type.tag_id}/`} key={type.tag_id}>
              <Tag
                key={type.tag_id} className="tag"
                title={type.name}
                typeid = {type.tag_id}
                color={CloudTags.getRandomColor()}
              >{type.name}({type.count})</Tag >
              </Link>
            )
          })}

        </div>
      </div>
    )
  }

}
