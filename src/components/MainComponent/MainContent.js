import React,{Component} from 'react';
import Posts from "../Posts/Posts";
import * as axios from "axios";

import "../../config";
import {Menu} from "antd";
import {Link} from "react-router-dom";

export default class MainContent extends Component{
  constructor(props){
    super(props);

    this.state = {
      total: 0,
      blogArray: [],
      nextPage: '',
      previous: null,
      pageSize: 0,
      current: -1,
      reqPage: 1,
      typeId: 0,
      isLoading: false,
    };
  }

  getPageData(url){
    axios.get(url).then(
      res=> {
        let data = res.data;
        this.setState({
            total: data.count,
            blogArray: data.results,
            nextPage: data.links.next,
            previous: data.links.previous,
            pageSize: data.page_size,
            current: data.current_page
          });
        window.scrollTo(0, 0)
      }
    );
  }

  componentDidMount(){
    let host = global.constants.host;
    let page = this.props.location.search;
    let reqUrl = page ? host + '/blog/' + page : host + '/blog/';
    this.getPageData(reqUrl)
  }

  handleChange(e){
    this.props.history.push('/blogs/?page='+e);
    let host = global.constants.host;
    let reqUrl = host + '/blog/?page='+ e;
    this.getPageData(reqUrl)
  }

  isBlogPath(){
    let url = this.props.location.pathname;
    return url === '/blogs' || url === '/blogs/';
  }

  render() {
    let search = this.props.location.search;
    let pageId = search.match(/\d+/) ? search.match(/\d+/)[0] : 1;

    return (
      <div className="main-container">
        <div className='sub-head'>
          <Menu mode="horizontal" onClick={this.handleClick}>
              <Menu.Item key="home">
                  <Link to="/blogs/"> 文章 </Link>
              </Menu.Item>
          </Menu>
        </div>
        <div>
          <Posts match={this.props.match}
               location={this.props.location}
               history={this.props.history}
               posts={this.state.blogArray}
               count = {this.state.total}
               current = {parseInt(pageId)}
               handleChange={this.handleChange.bind(this)}
        />
        </div>
      </div>
    )
  }
}
