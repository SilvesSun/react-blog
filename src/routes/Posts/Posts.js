import React, {Component} from 'react';
import './Posts.less'
import Post from "./Post";

export default class Posts extends Component{

  render() {
    return (
      <div id="main-content">
        <article className="">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </article>
      </div>
    )
  }

}
