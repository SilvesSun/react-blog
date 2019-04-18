import React, {Component} from 'react';
import './Poetry.less';


export default class Poetry extends Component{
  render() {
    return (
      <div className='poetry hvr-float-shadow blog-item'>
        <p>其形也，翩若惊鸿，婉若游龙</p>
        <p>荣曜秋菊，华茂春松</p>
        <p>髣髴兮若轻云之蔽月，飘飖兮若流风之回雪</p>
        <p className="p-author">-- 洛神赋</p>
      </div>
    )
  }
}


