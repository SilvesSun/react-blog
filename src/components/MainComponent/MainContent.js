import React,{Component} from 'react';
import SubHead from "../SubHead/SubHead";
import Posts from "../Posts/Posts";
import * as axios from "axios";

import "../../config";

export default class MainContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      blogArray: [],
      nextPage: '',
      previous: null
    };
  }

  componentDidMount() {
    let host = global.constants.host;
    const _this=this;
    axios.get(host + '/blog/').then(
      res=> {
        let data = res.data;
        _this.setState({
            total: data.count,
            blogArray: data.results,
            nextPage: data.next,
            previous: data.previous
          })
      }
    );
  }

  getLocLength(){
    let url = this.props.location.pathname;
    let uArr = url.split('/');
    return uArr.length;
  }

  render() {
    if (this.getLocLength() < 3){
      if(!this.state.isLoading){
        return (
          <div className="main-container" id='main-part'>
            <SubHead match={this.props.match} location={this.props.location} history={this.props.history}/>
            <Posts match={this.props.match}
                   location={this.props.location}
                   history={this.props.history}
                   posts={this.state.blogArray}
                   count = {this.state.total}
            />
          </div>
        )
      }else{
        return (
          <div>loading</div>
        )
      }

    }else {
      return (
        <div></div>
      )
    }
  }
}
