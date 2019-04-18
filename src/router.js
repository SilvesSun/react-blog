import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout/DefaultLayout'

export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={DefaultLayout} />
                        {/*<Redirect path="/" to='/home' />*/}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
