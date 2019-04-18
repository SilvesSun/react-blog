import React,{Component} from 'react';
import {Icon} from "antd";
import marked from 'marked';
import hljs from 'highlight.js';

export default class PostDetail extends Component{
  getMarkedHtml(content){
    // let md = new Remarkable();
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value,
    });
    return marked(content)
  }


  render() {
    const content = this.props.content;
    const createdTime = this.props.createdTime;
    let reg = '(http|https)://(.*.)(png|jpg|gif)';
    let matchStr = content.match(reg);
    this.getMarkedHtml(content);

    return (
      <div className="main-content">
        <article className="detail-content">
          <div className="post-info blog-item">
            <div className="post-author">
              <img src="http://supcoder.net/20190411094326.png" alt="" className='avatar'/>
              <button id='user-card-name' className='button-a'>sksun27</button>
            </div>
            <div className="post-meta">
              <span><Icon type="eye" />755</span>
              <span><Icon type="clock-circle" />{createdTime}</span>
              <span><Icon type="message" />53</span>
            </div>
            <div className="post-content">
              <h1 className="post-title">{this.props.title}</h1>
              <div dangerouslySetInnerHTML={{__html: this.getMarkedHtml(content)}} className="markdown">
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }

}
