import React, {Component} from 'react';
import Posts from "../Posts/Posts";
import * as axios from 'axios';
import {Link} from "react-router-dom";


export default class SearchRes extends Component{
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
      key: '',
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

  host = global.constants.host;
  searchUrl = `${this.host}/blog/search/`;

  getQuery(qs){
    let qPairs = qs.substring(1).split('&');
    let qObject = {
      q: '',
      page: 1
    };
    qPairs.map((e)=>{
      let qPair = e.split('=');
      qObject[qPair[0]] = qPair[1]
    });
    return qObject
  }
  componentDidMount() {
    let history = this.props.history;
    let key = history.location.search;

    axios.get(this.searchUrl+key).then(
      res=>{
          let data = res.data;
          this.setState({
            key: key,
            total: data.count,
            blogArray: data.results,
            nextPage: data.links.next,
            previous: data.links.previous,
          })
      }
    );
  };

  handleChange(e){
    let search = this.props.location.search;
    let q = this.getQuery(search);
    let qStr = q.q;

    this.props.history.push(`/search/?page=${e}&q=${qStr}`);
    let host = global.constants.host;
    let reqUrl = `${host}/blog/search/?page=${e}&q=${qStr}`;
    this.setState({key:e});
    this.getPageData(reqUrl)
  }


  render() {
    let search = this.props.location.search;
    let q = this.getQuery(search);
    let pageId = q.page;
    let qStr = q.q;
    return(
      <div className="main-container" ref={main => this._main = main}>
        <div className='detail-menu'>
          <span>当前位置 > <Link to=""> 文章 > </Link>搜索: <span className='search-key' style={{color:'#f55431'}}>{qStr.replace('?q=', '')}</span>({this.state.total}结果)</span>
          <Link to= ''>
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
