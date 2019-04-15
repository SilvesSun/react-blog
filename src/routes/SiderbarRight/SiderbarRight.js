import React, {Component} from 'react';
import './SiderbarRight.less'
import Poetry from "./Widgets/Poetry";
import CloudTags from "./Widgets/CloudTags";


export default class SiderbarRight extends Component{
  render() {
    return (
      <div className='sidebar-right'>
        <Poetry/>

        <CloudTags/>
      </div>
    )
  }
}
