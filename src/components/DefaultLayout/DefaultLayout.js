import React,{Component} from 'react';
import HeadNav from '../HeadNav/HeadNav';
import PostDetail from "../Posts/PostDetail";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import {Col, Row} from "antd";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import SidebarRight from "../SidebarRight/SidebarRight";
import MainContent from "../MainComponent/MainContent";
import TypeDetail from "../TypeDetail/TypeDetail";
import TagDetail from "../TagDetail/TagDetail";
import SearchRes from "../SearchRes/SearchRes";
import Archive from "../Archive/Archive";


export default class DefaultLayout extends Component{
  constructor(props){
    super(props);
    this.state = {
      detail: '',
      typeId: 0,
      searchText: '',
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
        <HeadNav/>
        <BrowserRouter>
          <Switch>
          <div className="content-wrap">
            <div id="Home">
              <Row className="main-wrap">
                <Col span={3} className="sidebar-left"><SidebarLeft history={this.props.history} location={this.props.location}/></Col>
                <Col span={14} offset={2} id={'main-part'}>
                  <Route  path='/blog/:Id' component={PostDetail} />
                  <Route  path='/type/:Id' component={TypeDetail} />
                  <Route  path='/tag/:Id' component={TagDetail} />
                  <Route  path='/archive/' component={Archive} />
                  <Route  path='/search/' component={SearchRes} />
                  <Route path="/blogs/" component={MainContent} />
                  <Route exact path="/" component={() => (<Redirect to={`/blogs/`}/>)} />
                </Col>
                <Col span={3}><SidebarRight history={this.props.history} handleTypeChange={this.handleTypeChange.bind(this)}/></Col>
              </Row>
            </div>
          </div>
          </Switch>
        </BrowserRouter>
      </div>
      )
  }
}
