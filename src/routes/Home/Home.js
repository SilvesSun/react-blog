import React, {Component} from 'react';
import './Home.less'
import '../../layouts/common.less'
import SubHead from "../../layouts/SubHead/SubHead";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import Posts from "../Posts/Posts";
import SidebarRight from "../SidebarRight/SidebarRight";

export default class Home extends Component{
  render() {
    return (
      <div id="Home">
        <div className="main-wrap">
          <div>
            <SidebarLeft/>
          </div>
          <div className="main-container" id='main-part'>
            <SubHead match={this.props.match} location={this.props.location} history={this.props.history}/>
            <Posts match={this.props.match} location={this.props.location} history={this.props.history}/>
          </div>
          <div>
            <SidebarRight/>
          </div>
        </div>
      </div>
    )
  }

}
