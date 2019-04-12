import React,{Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={DefaultLayout} />
                        <Redirect path="/" to='/home' />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
