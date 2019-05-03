import React,{Component} from 'react';
import PostDetail from "../Posts/PostDetail";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import {Button, Col, Icon, Layout, Menu, Row} from "antd";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import SidebarRight from "../SidebarRight/SidebarRight";
import MainContent from "../MainComponent/MainContent";
import TypeDetail from "../TypeDetail/TypeDetail";
import TagDetail from "../TagDetail/TagDetail";
import SearchRes from "../SearchRes/SearchRes";
import Archive from "../Archive/Archive";
import '../base.less'


const MenuItemGroup = Menu.ItemGroup;

export default class DefaultLayout extends Component{
  constructor(props){
    super(props);
    this.state = {
      detail: '',
      typeId: 0,
      searchText: '',
      hiddenLeft: 'hidden',
      hiddenContent: '',
      hiddenRight: 'hidden',
      disableLeft: false,
      disableRight: false,
      collapsed: true,
    };
  }

  handleTypeChange(e){
    this.setState(
      {
        typeId: e
      }
    );
  }

  handleClickMenu(e){
    if (e === 'left'){
      if (this.state.hiddenLeft === 'hidden') {
          this.setState({
            hiddenLeft: '',
            hiddenContent: 'hidden',
            hiddenRight: 'hidden',
          })
        }else {
          this.setState({
            hiddenLeft: 'hidden',
            hiddenContent: '',
            hiddenRight: 'hidden',
          })
        }
    }else if (e === 'right'){
      if (this.state.hiddenRight === 'hidden') {
          this.setState({
            hiddenLeft: 'hidden',
            hiddenContent: 'hidden',
            hiddenRight: '',
          })
        }else {
          this.setState({
            hiddenLeft: 'hidden',
            hiddenContent: '',
            hiddenRight: 'hidden',
          })
        }
    }else {
      this.setState({
            hiddenLeft: 'hidden',
            hiddenContent: '',
            hiddenRight: 'hidden',
          })
    }
  }

  render(){
    return (
      <Layout id="DefaultLayout">
        <div id="HeadNav">
          <Row>
            <Col span={24}>
              <div className="nav-wrap">
                <div className="nav-logo-wrap">
                    诗酒趁年华
                </div>
                <div className="nav-list-wrap">
                  <Menu selectedKeys={[this.state.current]} mode="horizontal" onClick={this.handleClick}>
                    <Menu.Item key="home">
                        <a href="/">
                            首页
                        </a>
                    </Menu.Item>
                    <Menu.Item key="archive">
                        <a href="/archive/">
                            归档
                        </a>
                    </Menu.Item>
                    <Menu.SubMenu title={<span><Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} /></span>} className='sidebar-menu'>
                      <MenuItemGroup>
                        <Menu.Item className='sidebar-menu-item'>
                          <Button type="primary" onClick={this.handleClickMenu.bind(this, 'left')} className={'buttonLeft'}>网站信息</Button>
                        </Menu.Item>
                        <Menu.Item className='sidebar-menu-item'>
                          <Button type="primary" onClick={this.handleClickMenu.bind(this, 'content')} className={'buttonLeft'}>文章</Button>
                        </Menu.Item>
                        <Menu.Item className='sidebar-menu-item'>
                          <Button type="primary" onClick={this.handleClickMenu.bind(this, 'right')}  className={'buttonRight'}>分类与搜索</Button>
                        </Menu.Item>
                      </MenuItemGroup>
                    </Menu.SubMenu>
                  </Menu>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <BrowserRouter>
          <Switch>
          <div className="content-wrap">
            <div id="Home">
              <Row className="main-wrap">
                <Col span={3} className={this.state.hiddenLeft + " sidebar-left"} >
                  <SidebarLeft history={this.props.history} location={this.props.location}/>
                </Col>
                <Col span={14} offset={2} id={'main-part'} className={this.state.hiddenContent}>
                  <Route  path='/blog/:Id' component={PostDetail} />
                  <Route  path='/type/:Id' component={TypeDetail} />
                  <Route  path='/tag/:Id' component={TagDetail} />
                  <Route  path='/archive/' component={Archive} />
                  <Route  path='/search/' component={SearchRes} />
                  <Route path="/blogs/" component={MainContent} />
                  <Route exact path="/" component={() => (<Redirect to={`/blogs/`}/>)} />
                </Col>
                <Col span={3} className={this.state.hiddenRight + " sidebar-right"}><SidebarRight history={this.props.history} handleTypeChange={this.handleTypeChange.bind(this)}/></Col>
              </Row>
            </div>
          </div>
          </Switch>
        </BrowserRouter>
      </Layout>
      )
  }
}
