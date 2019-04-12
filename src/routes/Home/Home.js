import React, {Component} from 'react';
import './Home.less'
import SubHead from "../../layouts/SubHead/SubHead";
import SiderbarLeft from "../SiderbarLeft/SiderbarLeft";
import Posts from "../Posts/Posts";

export default class Home extends Component{
  render() {
    return (
      <div id="Home">
        <div className="home-wrap">
          <div>
            <SiderbarLeft/>
          </div>
          <div className="main-container" id='main-part'>
            <SubHead match={this.props.match} location={this.props.location} history={this.props.history}/>
            <Posts/>
          </div>
          <div className="sidebar-right">

          </div>
        </div>
      </div>
    )
  }

}
