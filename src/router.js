import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={DefaultLayout}  exact />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
