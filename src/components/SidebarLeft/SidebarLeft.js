import React, {Component} from 'react';
import {Icon} from "antd";
import TimeWidget from "./TimeWidget";
import './SidebarLeft.less';
import * as axios from 'axios'
import '../../config';
import '../../common/less/common.less';
import {Link} from "react-router-dom";

export default class SidebarLeft extends Component{
  constructor(props){
    super(props);
    this.state = {
      blogCount: 0,
      readCount: 0,
      mostRead: [],
    }
  }

  componentDidMount() {
    let host = global.constants.host;
    let url = host + '/blog/recommend/';
    axios.get(url).then(
      res => {
        let data = res.data;
        this.setState(
          {
            blogCount: data.blog_count,
            readCount: data.read_total,
            mostRead: data.most_read,
          }
        )
      }
    );
  }

  render() {
    return (
      <div>
          <div id="user-card" className='user-card blog-item hvr-float-shadow'>
            <div id='user-card-bg'>
            </div>
            <button id='user-card-name' className='button-a'>sksun27</button>
            <div className="user-card-info">
              <div id="user-card-info">
                <button id="user-card-article" className='button-a'>
                  <p className="num">{this.state.blogCount} <span className='text'>文章</span></p>
                </button>
                <button id="user-card-article" className='button-a'>
                  <p className="num">{this.state.readCount}<span className='text'>阅读</span></p>
                </button>
              </div>
              <img src="https://cdn.sksun.site/20190411094326.png" alt="" className='avatar'/>
            </div>
          </div>

          <div className="user-info-side blog-item hvr-float-shadow">
            <div className="row">
              <Icon type="qq" style={{'color': '#55acee', 'padding': '0 5px'}}/>
              <span className='button-a user-info-list'>2498256234</span>
            </div>
            <div className="row">
              <Icon type="github" style={{'color': '#55acee', 'padding': '0 5px'}}/>
              <a className='button-a user-info-list' href="https://github.com/SilvesSun">SilvesSun</a>
            </div>
            <div className="row">
              <Icon type="mail" style={{'color': '#55acee', 'padding': '0 5px'}}/>
              <a className='button-a user-info-list' href="mailto:sunshengkai27@gmail.com">sunshengkai27@gmail.com</a>
            </div>
          </div>

          <div className="blog-item hvr-float-shadow">
            <TimeWidget/>
          </div>

          <div className='recommend blog-item hvr-float-shadow' id='recommend'>
            <header><Icon type="book" />随机推荐</header>
            <ul className='sidebar-posts-list'>
              {this.state.mostRead.map((post) => {
                let url = `/blog/${post.id}/`;
                return (
                  <li key={post.id}>
                    <Link className='post-title' to={url}> {post.title}</Link>
                    <p className='post-info'>
                    <span><Icon type="eye" style={{'color': '#55acee', 'padding': '0 5px'}}/>{post.read_num}</span>
                    <span><Icon type="clock-circle" style={{'color': '#55acee', 'padding': '0 5px'}}/>{post.created_time}</span>
                    </p>
                  </li>
                  )
                })
              }
            </ul>
          </div>
      </div>
    )
  }
}
