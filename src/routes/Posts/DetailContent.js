import React,{Component} from 'react';
import "../Home/Home.less"
import {Icon} from "antd";

export default class PostDetail extends Component{
  state = {
      imgUrl: 'https://shawnzeng.com/wp-content/uploads/2018/12/66568021_p0.jpg',
    };

  render() {

    return (
      <div className="main-content">
        <article className="detail-content">
          <div className="post-info blog-item">
            <div className="thumbnail" ref={thumb => this._thumbDom = thumb} style={{backgroundImage: 'url("'+ this.state.imgUrl+ '")'}}>
            </div>
            <div className="post-author">
              <img src="http://supcoder.net/20190411094326.png" alt="" className='avatar'/>
              <button id='user-card-name' className='button-a'>sksun27</button>
            </div>
            <div className="post-meta">
              <span><Icon type="eye" />755</span>
              <span><Icon type="clock-circle" />17小时前</span>
              <span><Icon type="message" />53</span>
            </div>
            <div className="post-content">
              <h3 className="post-title">三数之和</h3>
              <p>
              目前为止，第二阶段知识已经基本介绍完，我们已经具备了项目上手实战必备的 React.js 知识，现在可以把这些知识应用起来。接下来是实战环节，我们会继续上一阶段的例子，把评论功能做得更加复杂一点。

              我们在上一阶段的评论功能基础上加上以下功能需求：

              页面加载完成自动聚焦到评论输入框。
              把用户名持久化，存放到浏览器的 LocalStorage 中。页面加载时会把用户名加载出来显示到输入框，用户就不需要重新输入用户名了。
              把已经发布的评论持久化，存放到浏览器的 LocalStorage 中。页面加载时会把已经保存的评论加载出来，显示到页面的评论列表上。
              评论显示发布日期，如“1 秒前”，”30 分钟前”，并且会每隔 5 秒更新发布日期。
              评论可以被删除。
              </p>
            </div>
          </div>
        </article>
      </div>
    )
  }

}
