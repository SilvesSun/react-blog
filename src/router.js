import React,{Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout/DefaultLayout'

export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <BrowserRouter>
                    <Switch>
                        <Route path='/blogs' component={DefaultLayout}  exec/>
                        <Redirect path="/" to='/blogs'/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
