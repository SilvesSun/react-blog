import React,{Component} from 'react';
import HeadNav from '../../common/HeadNav';
import PostDetail from "../Posts/PostDetail";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";
import MainContent from "../MainComponent/MainContent";
import {Route} from "react-router-dom";
import TypeDetail from "../TypeDetail/TypeDetail";



export default class DefaultLayout extends Component{
  constructor(props){
    super(props);
    this.state = {
      detail: '',
      typeId: 0,
      blogs: [],
    }
  }

  handleTypeChange(e){
    this.setState(
      {
        typeId: e
      }
    );
  }

  render(){
    return (
      <div id="DefaultLayout">
        <HeadNav match={this.props.match} location={this.props.location} history={this.props.history} />
        <div className="content-wrap">
          <div id="Home">
            <div className="main-wrap">
              <div>
                <SidebarLeft history={this.props.history} location={this.props.location}/>
              </div>
              <Route  path='/blogs/'  component={MainContent}/>
              <Route  path='/blogs/blog/:Id' component={PostDetail} />
              <Route  path='/blogs/type/:Id' component={TypeDetail} />
              <div>
                <SidebarRight history={this.props.history} handleTypeChange={this.handleTypeChange.bind(this)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}
