import React, {Component} from 'react';
import './Posts.less'
import Post from "./Post";
import { Pagination } from 'antd';

export default class Posts extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: this.props.posts,
    }
  }

  static defaultProps = {
    posts: [],
    total: 0
  };

  itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>上一页</a>;
  } if (type === 'next') {
    return <a>下一页</a>;
  }
  return originalElement;
}

  render() {
    return (
      <div id="main-content">
        <article className="">
          {this.props.posts.map((post) => {
            return (
              <Post post={post} key={post.id}/>
              )
            })
          }
          <Pagination showQuickJumper
                      defaultCurrent={this.props.current}
                      total={this.props.count}
                      itemRender={this.itemRender}
                      onChange={this.props.handleChange}
                      className='blog-item hvr-float-shadow custom-page'
          />
        </article>
      </div>
    )
  }
}
