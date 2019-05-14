import React,{Component} from 'react';
import {Icon} from "antd";
import marked from 'marked';
import hljs from 'highlight.js';

export default class PostDetail extends Component{
  getMarkedHtml(content){
    marked.setOptions({
      highlight: code => hljs.highlightAuto(code).value,
    });
    return marked(content)
  }


  componentDidMount() {
    let s = document.createElement('script');
    s.src = 'https://sksunblog.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (document.head || document.body).appendChild(s);
  }


  render() {
    const content = this.props.content;
    const createdTime = this.props.createdTime;
    this.getMarkedHtml(content);

    return (
      <article className="detail-content">
        <div className="post-info blog-item">
          <div className="post-author">
            <img src="https://supcoder.net/20190411094326.png" alt="" className='avatar'/>
            <button id='user-card-name' className='button-a'>sksun27</button>
          </div>
          <div className="post-meta">
            <span><Icon type="eye" />{this.props.readNum}</span>
            <span><Icon type="clock-circle" />{createdTime}</span>
          </div>
          <div className="post-content">
            <h1 className="post-title">{this.props.title}</h1>
            <div dangerouslySetInnerHTML={{__html: this.getMarkedHtml(content)}} className="markdown">
            </div>
          </div>
          <div id="disqus_thread" className='disqus_thread'/>
        </div>
      </article>
    )
  }

}
