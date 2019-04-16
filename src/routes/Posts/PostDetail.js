import React,{Component} from 'react';
import "../../common/HeadNav.less";
import "./PostDetail.less";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";
import DetailHead from "./DetailHead";
import DetailContent from "./DetailContent";

export default class PostDetail extends Component{
  render() {
    return (
      <div id="details">
        <div className="main-wrap">
          <div>
            <SidebarLeft/>
          </div>
          <div className="main-container" id='main-part'>
            <DetailHead/>
            <DetailContent/>
          </div>
          <div>
            <SidebarRight/>
          </div>
        </div>
      </div>
    )
  }
}
