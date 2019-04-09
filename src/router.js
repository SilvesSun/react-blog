import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import BasicLayout from "./layout/header";

export default class RouterMap extends Component{
  render() {
    return (
      <div id="router">
        <HashRouter>
          <Switch>
            <Route path="/" component={BasicLayout}  exact />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
