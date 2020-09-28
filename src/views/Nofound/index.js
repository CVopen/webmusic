/*
 * @Author: xyh 
 * @Date: 2020-09-22 00:30:15 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-28 15:21:39
 */
import React, { Component } from 'react'
import './index.scss'
export default class Nofound extends Component {
  render() {
    return (
      <div className="no-found">
        <img src={require("../../assets/images/404.jpg")} alt="loading图片"/> 
        <div className="text">
          <span>我觉得你是迷路了，好好听歌不香吗？</span>
          <a href="#/">赶紧来点我一下</a>
        </div>
      </div>
    )
  }
}