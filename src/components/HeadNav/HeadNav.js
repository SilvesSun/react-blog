import React, {Component} from 'react';
import {Menu, Input} from 'antd'
import './HeadNav.less'
import {Link} from "react-router-dom";

export default class HeadNav extends Component{
    constructor(props){
        super(props);
        let location=this.props.location.pathname.split('/');
        let currentName=location[location.length-1]?location[location.length-1]:'home';
        this.state = {
            current: currentName,
        }
    }

    handleClick = (e) => {
        this.setState({current: e.key})
    };

    handleSearch(v){
      this.props.history.push(`/blogs/search/?q=${v}`)
    }

    render(){
        const Search = Input.Search;
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        诗酒趁年华
                    </div>
                    <div className="nav-list-wrap">
                        <Menu selectedKeys={[this.state.current]} mode="horizontal" onClick={this.handleClick}>
                            <Menu.Item key="home">
                                <Link to="">
                                    首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="archive">
                                <Link to="/blogs/archive/">
                                    归档
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div className="search">
                        <Search
                            placeholder="search"
                            style={{ width: 145 }}
                            onSearch={value => this.handleSearch(value)}
                          />
                    </div>
                </div>
            </div>
        )
    }
}
