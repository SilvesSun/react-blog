import React, {Component} from 'react';
import './Poetry.less';


export default class Poetry extends Component{
  render() {
    return (
      <div className='poetry hvr-float-shadow blog-item'>
        <p>春未老，风细柳斜斜。试上超然台上望，半壕春水一城花。烟雨暗千家。</p>
        <p>寒食后，酒醒却咨嗟。休对故人思故国，且将新火试新茶。诗酒趁年华</p>
        <p className="p-author">-- 苏轼</p>
      </div>
    )
  }
}


