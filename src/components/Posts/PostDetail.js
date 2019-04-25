import React,{Component} from 'react';
import "../HeadNav/HeadNav.less";
import "./PostDetail.less";
import DetailContent from "./DetailContent";
import * as axios from "axios";
import {Link} from "react-router-dom";

export default class PostDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      content: '',
      title:'',
      created_time: '',
      readNum: '',
    }
  }

  getDetail(url){
    axios.get(url).then(
      res=> {
        let data = res.data;
        this.setState({
            content: data.content,
            title: data.title,
            created_time: data.created_time,
            readNum: data.read_num,
          })
      })
  }

  componentDidMount() {
    let host = global.constants.host;
    let detailId = this.props.match.params.Id;
    this.getDetail(host + '/blog/' + detailId);
    let history = this.props.history;
    history.listen(()=>{
      let detail = history.location.pathname;
      let detailReg = new RegExp(/\/blogs\/blog\/\d+\//);
      let detailStr = detail.match(detailReg) !== null ? detail.match(/\d+/): '';
      if (detailStr.length > 0){
        let url = host + '/blog/' + detailStr[0] + '/';
        this.getDetail(url);
      }
    })
  }


  render() {
    return (
      <div className="main-container" id='main-part'>
        <div  id='sub-head-wrap'>
          <div className='detail-menu'>
            <span>当前位置 ></span>
            <Link to= ''>
                文章
            </Link>
            <span>> {this.state.title}</span>
          </div>
        </div>
        <DetailContent
          content={this.state.content}
          createdTime = {this.state.created_time}
          title={this.state.title}
          readNum = {this.state.readNum}
        />
      </div>
    )
  }
}
