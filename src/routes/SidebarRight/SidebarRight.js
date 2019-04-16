import React, {Component} from 'react';
import '../../layouts/common.less';
import './SidebarRight.less';
import Poetry from "./Widgets/Poetry";
import CloudTags from "./Widgets/CloudTags";


export default class SidebarRight extends Component{
  render() {
    return (
      <div id='sidebar-right'>
        <Poetry/>

        <CloudTags/>
      </div>
    )
  }
}
