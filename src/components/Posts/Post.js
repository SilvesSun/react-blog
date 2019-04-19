import React, {Component} from 'react';
import {Icon} from "antd";
import {Link} from "react-router-dom";
import '../../config';

export default class Post extends Component{
  render() {
    const post = this.props.post;
    const content = post.content;
    const tags = post.tags;
    let reg = '(http|https)://(.*.)(png|jpg|gif)';
    let matchStr = content.match(reg);
    let imgSrc = matchStr ? matchStr[0] : global.constants.defaulImg;
    let detailUrl = '/blogs/blog/' + post.id;

    return(
      <div className="post-info blog-item hvr-float-shadow">
        <div className="author">
          <img src="http://supcoder.net/20190411094326.png" alt="" className='post-avatar'/>
          <p className="author-name">sksun27</p>
        </div>
        <div className="tags">
          {tags.map((tag)=>{
              return (
                <span key={tag.id}>
                  <Icon type="tag"/><a>{tag.name}</a>
                </span>
              )
            })}
          <Icon type="eye" /><button className='button-a'>{post.read_num}</button>
          <Icon type="clock-circle" className='time-clock'/><button className='button-a'>{post.created_time}</button>
        </div>
        <div className="excerpt">
          <div className="thumbnail">
            <img src={imgSrc} alt=""/>
          </div>
          <div className="article-info">
            <Link to= {detailUrl}>
              <div className="excerpt-title">{post.title}</div>
              <div className="excerpt-info">
                <p>
                  {post.content}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}