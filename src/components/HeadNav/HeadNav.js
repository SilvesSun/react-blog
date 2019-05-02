import React, {Component} from 'react';
import {Menu, Row, Col} from 'antd'

export default class HeadNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            current: '',
        }
    }

    handleClick = (e) => {
        this.setState({current: e.key})
    };

    render(){
        return (
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
                            </Menu>
                        </div>
                    </div>
                  </Col>
                </Row>
            </div>
        )
    }
}
