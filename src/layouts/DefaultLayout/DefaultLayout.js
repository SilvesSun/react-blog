import React,{Component} from 'react';
import HeadNav from '../../common/HeadNav';
import {Route} from 'react-router-dom';
import Home from '../../routes/Home/Home';
import Archive from "../../routes/Archive/Archive";
import PostCategory from "../../routes/PostCategory/PostCategory";
export default class DefaultLayout extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div id="DefaultLayout">
                <HeadNav match={this.props.match} location={this.props.location} history={this.props.history} />
                <div className="content-wrap">
                    <Route  path={this.props.match.url+'/'} component={Home}  exact/>
                    <Route  path={this.props.match.url+'/archive'} component={Archive}  />
                    <Route  path={this.props.match.url+'/category'} component={PostCategory}  />
                </div>
            </div>
        )
    }
}
