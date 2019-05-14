import React,{Component} from 'react';
import Loadable from 'react-loadable';
import {Button, Col, Icon, Layout, Menu, Row} from "antd";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import '../base.less'
import Loading from "../Loading/Loading";


const MenuItemGroup = Menu.ItemGroup;

const LoadableMain = Loadable({
  loader: () => import('../MainComponent/MainContent'),
  loading: Loading,
});

const LoadableDetail = Loadable({
  loader: () => import('../Posts/PostDetail'),
  loading: Loading,
});

const LoadableTypeDetail = Loadable({
  loader: () => import('../TypeDetail/TypeDetail'),
  loading: Loading,
});

const LoadableTagDetail = Loadable({
  loader: () => import('../TagDetail/TagDetail'),
  loading: Loading,
});

const LoadableArchive = Loadable({
  loader: () => import('../Archive/Archive'),
  loading: Loading,
});

const LoadableSearchRes = Loadable({
  loader: () => import('../SearchRes/SearchRes'),
  loading: Loading,
});

const LoadableLeft = Loadable({
  loader: () => import('../SidebarLeft/SidebarLeft'),
  loading: Loading,
});

const LoadableRight = Loadable({
  loader: () => import('../SidebarRight/SidebarRight'),
  loading: Loading,
});

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
        typeId: e,
        hiddenLeft: 'hidden',
        hiddenContent: '',
        hiddenRight: 'hidden',
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
                  <LoadableLeft history={this.props.history} location={this.props.location}/>
                </Col>
                <Col span={14} offset={2} id={'main-part'} className={this.state.hiddenContent}>
                  <Route  path='/blog/:Id' component={LoadableDetail} />
                  <Route  path='/type/:Id' component={LoadableTypeDetail} />
                  <Route  path='/tag/:Id' component={LoadableTagDetail} />
                  <Route  path='/archive/' component={LoadableArchive} />
                  <Route  path='/search/' component={LoadableSearchRes} />
                  <Route path="/blogs/" component={LoadableMain} />
                  <Route exact path="/" component={() => (<Redirect to={`/blogs/`}/>)} />
                </Col>
                <Col span={3} className={this.state.hiddenRight + " sidebar-right"}><LoadableRight history={this.props.history} handleTypeChange={this.handleTypeChange.bind(this)}/></Col>
              </Row>
            </div>
          </div>
          </Switch>
        </BrowserRouter>
      </Layout>
      )
  }
}
