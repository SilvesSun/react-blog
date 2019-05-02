import React, {Component} from 'react';
import Posts from "../Posts/Posts";
import * as axios from 'axios';
import {Link} from "react-router-dom";


export default class TagDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      blogArray: [],
      nextPage: '',
      previous: null,
      pageSize: 0,
      reqPage: 1,
      typeId: 0,
      total: 0,
    };
  }

  host = global.constants.host;

  getTagBlog(url){
    axios.get(url).then(
      res =>{
        let data = res.data;
        this.setState({
          tagId: data.id,
          title: data.tag_name,
          blogArray: data.results,
          total: data.count,
          nextPage: data.links.next,
          previous: data.links.previous,
          pageSize: data.page_size,
          }
        )
      }
    );
  }

  handleChange(e){
    this.props.history.push(`/tag/${this.state.tagId}/?page=${e}`);
    let host = global.constants.host;
    let reqUrl = host + '/tag/'+this.state.tagId+'/tag_blog/?page='+ e;
    this.getTagBlog(reqUrl)
  }

  componentDidMount(){
    let pathname = this.props.location.pathname;
    let typeObj = pathname.match(/\d+/);
    let typeId = parseInt(typeObj[0]) > 0 ? typeObj[0] : 1;
    let url = `${this.host}/tag/${typeId}/tag_blog/`;
    this.getTagBlog(url);
    let history = this.props.history;
    history.listen(()=>{
      let detail = history.location.pathname;
      let detailReg = new RegExp(/\/blogs\/tag\/\d+\//);
      let detailStr = detail.match(detailReg) !== null ? detail.match(/\d+/): '';
      if (detailStr.length > 0){
      let url = this.host + '/tag/' + detailStr[0] + '/tag_blog/';
      this.getTagBlog(url);
      }
    })
  }

  componentWillUnmount () {
    clearInterval(this._main)
  }

  render() {
    let search = this.props.location.search;
    let pageId = search.match(/\d+/) ? search.match(/\d+/)[0] : 1;
    // let to_url = `/blogs/tag/${this.state.typeId}/`;
    return (
      <div className="main-container" ref={main => this._main = main}>
        <div className='detail-menu'>
          <span>当前位置 ><Link to=""> 文章> </Link> 标签 > {this.state.title}</span>
        </div>
        <Posts match={this.props.match}
               location={this.props.location}
               history={this.props.history}
               posts={this.state.blogArray}
               count = {this.state.total}
               current = {parseInt(pageId)}
               handleChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}
