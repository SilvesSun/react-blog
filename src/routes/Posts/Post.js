import React, {Component} from 'react';
import {Icon} from "antd";

export default class Post extends Component{
  render() {
    return(
      <div className="post-info blog-item hvr-float-shadow">
        <div className="author">
          <img src="http://supcoder.net/20190411094326.png" alt="" className='post-avatar'/>
          <p className="author-name">sksun27</p>
          <p className='time-meta'><Icon type="clock-circle" />1月前</p>
        </div>
        <div className="tags">
          <Icon type="tag" /><a>算法</a>
          <Icon type="tag" /><a>数组</a>
          <Icon type="tags" /><a>Leetcode</a>
        </div>
        <div className="excerpt">
          <div className="thumbnail">
            <img src="https://shawnzeng.com/wp-content/uploads/2018/12/66568021_p0.jpg" alt=""/>
          </div>
          <div className="article-info">
            <a href="home/post/1">
              <div className="excerpt-title">三数之和</div>
              <div className="excerpt-info">
                <p>
                  目前为止，第二阶段知识已经基本介绍完，我们已经具备了项目上手实战必备的 React.js 知识，现在可以把这些知识应用起来。接下来是实战环节，我们会继续上一阶段的例子，把评论功能做得更加复杂一点。
                  目前为止，第二阶段知识已经基本介绍完，我们已经具备了项目上手实战必备的 React.js 知识，现在可以把这些知识应用起来。接下来是实战环节，我们会继续上一阶段的例子，把评论功能做得更加复杂一点。
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
