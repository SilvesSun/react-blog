import React,{Component} from 'react';

export default class Loading extends Component{

  render() {
    const Spinner = require('react-spinkit');
    return <Spinner name="three-bounce" color="#0b98eb" padding-left={'20px'}/>
  }
}
