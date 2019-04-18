import React, {Component} from 'react';
import './Posts.less'
import Post from "./Post";

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
        </article>
      </div>
    )
  }
}
