import React, {Component} from 'react';
import "./header.less"
import Header from "./header";

export default class BasicLayout extends Component {
  render() {
    return (
      <div id="BasicLayout">
        <Header/>
      </div>
    )
  }
}

