import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Archive.less';
import * as axios from  'axios';


export default class Archive extends Component{
  state = {
    showMonth: false,
    data: {'2019':{'1':[]}},
    years: []
  };

  host = global.constants.host;

  componentDidMount() {
    let url = `${this.host}/blog/archive/`;
    axios.get(url).then(
      res=>{
        let data = res.data;
        // for (let i in data){
        //   console.info(i)
        // }
        let years = Object.keys(data).reverse();
        this.setState({
          data: data,
          years: years
        })
      }
    )
  }

  render() {
    return (
      <div className="main-container" id='main-part'>
        <div  id='sub-head-wrap'>
          <div className='detail-menu'>
            <span>当前位置 > <Link to=""> 文章 > </Link>归档</span>
          </div>
        </div>
        <div id="main-content">
          <section className="archive">
            {this.state.years.map((_year)=>{
              let months = Object.keys(this.state.data[_year]).reverse();
              return (
                <ul className="ant-timeline ant-timeline-alternate" key={_year}>
                  <li className="ant-timeline-item ant-timeline-item-right">
                    <div className="ant-timeline-item-tail"/>
                    <div className="ant-timeline-item-head ant-timeline-item-head-red"/>
                    <div >
                      <h3 className="archive-title">{_year}</h3>
                      {months.map((month)=>{
                        let posts = this.state.data[_year][month];
                        return(
                          <div className="month-detail" key={month}>
                            <h4 className='archive-sub-title'>{month}月</h4>
                            {posts.map((post)=>{
                              let blog_url = `/${this.host}/blogs/blog/${post.id}`;
                              let create_time = new Date(Date.parse(post.created_time));
                              return (
                                <ul className="ant-timeline-sub" key={post.id}>
                                  <li className="ant-timeline-item ant-timeline-item-right">
                                    <div className="ant-timeline-item-tail"/>
                                    <div className="ant-timeline-item-head ant-timeline-item-head-blue"/>
                                    <div className="ant-timeline-item-content">
                                      <p className="archive-detail"><span className='post-date'>{create_time.getDate()}日</span><Link to={blog_url}>{post.title}</Link></p>
                                    </div>
                                  </li>
                                </ul>
                              )
                            })}
                          </div>
                        )
                      })}
                    </div>
                  </li>
                </ul>
              )
            })}
          </section>
        </div>
      </div>
    )
  }
}
