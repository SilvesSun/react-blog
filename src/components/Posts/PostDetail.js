import React,{Component} from 'react';
import "../../common/HeadNav.less";
import "./PostDetail.less";
import DetailHead from "./DetailHead";
import DetailContent from "./DetailContent";
import * as axios from "axios";

export default class PostDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      content: '',
      title:'',
      created_time: '',
      readNum: ''
    }
  }

  componentDidMount() {
    let host = global.constants.host;
    let detailId = this.props.match.params.Id;
    const _this=this;
    axios.get(host + '/blog/' + detailId).then(
      res=> {
        let data = res.data;
        _this.setState({
            content: data.content,
            title: data.title,
            created_time: data.created_time,
            readNum: data.read_num,
          })
      }
    );
  }

  render() {
    return (
      <div className="main-container" id='main-part'>
        <DetailHead title={this.state.title}/>
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
