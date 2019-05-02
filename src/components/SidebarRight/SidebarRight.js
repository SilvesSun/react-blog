import React, {Component} from 'react';
import '../../common/less/common.less';
import Poetry from "./Widgets/Poetry";
import CloudTags from "./Widgets/CloudTags";
import {Input} from "antd";


export default class SidebarRight extends Component{
  handleSearch(v){
    window.location.href = `/search/?q=${v}`
  }

  render() {
    const Search = Input.Search;
    return (
      <div id='sidebar-right'>
        <div className="search blog-item">
          <Search
              placeholder="search"
              style={{ width: 250 }}
              onSearch={value => this.handleSearch(value)}
            />
        </div>
        <Poetry/>
        <CloudTags history={this.props.history} handleTypeChange={this.props.handleTypeChange.bind(this)}/>
      </div>
    )
  }
}
