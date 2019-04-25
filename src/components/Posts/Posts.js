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
    return <span>上一页</span>;
  } if (type === 'next') {
    return <span>下一页</span>;
  }
  return originalElement;
}

  render() {
    return (
      <div id="main-content">
        <article className="">
          {this.props.posts.map((post) => {
            return (
              <Post post={post} key={post.id} history={this.props.history}/>
              )
            })
          }
          <Pagination showQuickJumper
                      defaultCurrent={this.props.current > 1? this.props.current: 1}
                      total={this.props.count}
                      itemRender={this.itemRender}
                      onChange={this.props.handleChange}
                      hideOnSinglePage={true}
                      className='blog-item hvr-float-shadow custom-page'
          />
        </article>
      </div>
    )
  }
}
