import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicLayout from "./layout/header";


class Header extends Component{
  render() {
    return (
      <div>
        <BasicLayout/>
      </div>
    )
  }
}

ReactDOM.render(
  <Header/>,
  document.getElementById('root')
);


