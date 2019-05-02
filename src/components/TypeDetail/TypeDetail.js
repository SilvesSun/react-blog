import React, {Component} from 'react';
import Posts from "../Posts/Posts";
import * as axios from 'axios';
import {Link} from "react-router-dom";

export default class TypeDetail extends Component{
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
          typeId: data.id,
          title: data.type_name,
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
    this.props.history.push(`/blogs/type/${this.state.typeId}/?page=${e}`);
    let host = global.constants.host;
    let reqUrl = host + '/type/'+this.state.typeId+'/type_blog/?page='+ e;
    this.getTagBlog(reqUrl)
  }

  componentDidMount(){
    let pathname = this.props.location.pathname;
    let typeObj = pathname.match(/\d+/);
    let typeId = parseInt(typeObj[0]) > 0 ? typeObj[0] : 1;
    let url = `${this.host}/type/${typeId}/type_blog/`;
    this.getTagBlog(url);
    let history = this.props.history;
    history.listen(()=>{
      let detail = history.location.pathname;
      let detailReg = new RegExp(/\/type\/\d+\//);
      let detailStr = detail.match(detailReg) !== null ? detail.match(/\d+/): '';
      if (detailStr.length > 0){
      let url = this.host + '/type/' + detailStr[0] + '/type_blog/';
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
    let to_url = `/type/${this.state.typeId}/`;
    return (
      <div className="main-container" ref={main => this._main = main}>
        <div className='detail-menu'>
          <span>当前位置 > <Link to=""> 文章 > </Link>分类 ></span>
          <Link to= {to_url}>
              {this.state.title}
          </Link>
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
