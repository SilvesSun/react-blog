import React, {Component} from 'react';
import {Icon} from "antd";

export default class TimeWidget extends Component{
  constructor(props){
    super(props);
    this.state = {
      createTime: "2018-05-21 0:0:0",
      timeStr: "",
    }
  }

  static formatDiffTime(number){
    let timeArr = [0, 0, 0, 0, 0];
    const yearMilSec =  365*24*3600*1000;
    const dayMilSec = 24 * 3600*1000;
    const hourMilSec = 3600*1000;
    const minuSec = 60*1000;
    const second = 1000;
    if (number > yearMilSec){
      timeArr[0] = parseInt(number / yearMilSec);
      number %= yearMilSec;
    }

    if (number > dayMilSec){
      timeArr[1] = parseInt(number / dayMilSec);
      number %= dayMilSec;
    }

    if (number > hourMilSec){
      timeArr[2] = parseInt(number / hourMilSec);
      number %= hourMilSec;
    }

    if (number > minuSec){
      timeArr[3] = parseInt(number / minuSec);
      number %= minuSec;
    }

    if (number > second){
      timeArr[4] = parseInt(number / second);
    }
    return timeArr
  }

  setRunTime(){
    let year, day, hour, minute, second;

    const now = Date.now();
    const durationDate = (now - new Date(Date.parse(this.state.createTime.replace(/-/g,   "/"))));
    let timeArray = TimeWidget.formatDiffTime(durationDate);
    year = timeArray[0];
    day = timeArray[1];
    hour = timeArray[2];
    minute = timeArray[3];
    second = timeArray[4];

    this.setState({
      timeStr: `${year} 年 ${day} 天 ${hour} 小时 ${minute} 分钟 ${second} 秒`,
    })
  }

  componentDidMount() {
    this._timer = setInterval(this.setRunTime.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this._timer)
  }

  render() {
    return (
      <div className="sidebar-widget">
        <p className='sidebar-title'><Icon type="global" />网站运行时间</p>
        <p className='time-str'>{this.state.timeStr}</p>
      </div>
    )
  }
}
