import React, {Component} from 'react';
import '../../common/less/common.less';
import './SidebarRight.less';
import Poetry from "./Widgets/Poetry";
import CloudTags from "./Widgets/CloudTags";


export default class SidebarRight extends Component{
  render() {
    return (
      <div id='sidebar-right'>
        <Poetry/>
        <CloudTags history={this.props.history} handleTypeChange={this.props.handleTypeChange.bind(this)}/>
      </div>
    )
  }
}
