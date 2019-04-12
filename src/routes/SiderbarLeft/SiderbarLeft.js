import React, {Component} from 'react';
import {Icon} from "antd";
import TimeWidget from "./TimeWidget";

export default class SiderbarLeft extends Component{
  render() {
    return (
      <div className="sidebar-left">
            <div id="user-card" className='user-card blog-item hvr-float-shadow'>
              <div id='user-card-bg'>
              </div>
              <button id='user-card-name' className='button-a'>sksun27</button>
              <div className="user-card-info">
                <div id="user-card-info">
                  <button id="user-card-article" className='button-a'>
                    <p className="num">30 <span className='text'>文章</span></p>
                  </button>
                  <button id="user-card-article" className='button-a'>
                    <p className="num">2339 <span className='text'>阅读</span></p>
                  </button>
                </div>
                <img src="http://supcoder.net/20190411094326.png" alt="" className='avatar'/>
              </div>
            </div>

            <div className="user-info-side blog-item hvr-float-shadow">
              <div className="row">
                <Icon type="qq" />
                <span className='button-a user-info-list'>2498256234</span>
              </div>
              <div className="row">
                <Icon type="github" />
                <a className='button-a user-info-list' href="https://github.com/SilvesSun">SilvesSun</a>
              </div>
              <div className="row">
                <Icon type="mail" />
                <a className='button-a user-info-list' href="mailto:sunshengkai27@gmail.com">sunshengkai27@gmail.com</a>
              </div>
            </div>

            <div className="blog-item hvr-float-shadow">
              <TimeWidget/>
            </div>

            <div className='recommend blog-item hvr-float-shadow'>
              <header><Icon type="book" />文章推荐</header>
              <ul className='sidebar-posts-list'>
                <li>
                  <p className='post-title'>建设社会主义国家必要的过程</p>
                  <p className='post-info'>
                    <span><Icon type="eye" />755</span>
                    <span><Icon type="clock-circle" />17小时前</span>
                    <span><Icon type="message" />53</span>
                  </p>
                </li>
                <li>
                  <p className='post-title'>建设社会主义国家必要的过程</p>
                  <p className='post-info'>
                    <span><Icon type="eye" />755</span>
                    <span><Icon type="clock-circle" />17小时前</span>
                    <span><Icon type="message" />53</span>
                  </p>
                </li>
                <li>
                  <p className='post-title'>建设社会主义国家必要的过程</p>
                  <p className='post-info'>
                    <span><Icon type="eye" />755</span>
                    <span><Icon type="clock-circle" />17小时前</span>
                    <span><Icon type="message" />53</span>
                  </p>
                </li>
              </ul>
            </div>
      </div>
    )
  }
}
