/*
 * @Author: xyh 
 * @Date: 2020-09-25 13:18:30 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-26 14:25:50
 */
import React, { Component } from 'react'
import './index.scss'
import { Row, Col } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
export default class Header extends Component {
  constructor(props) {
    super(props)
    
    this.timer = []
    this.state = {
      hover_find: false,
      hover_my: false,
      hover_friend: false
    }
  }
  // 鼠标移入
  overHover = (ev) => {
    switch (ev.target.dataset.hover) {
      case 'find':
        this.setState({
          hover_find: true
        })
        break;
      case 'my':
        this.setState({
          hover_my: true
        })
        break;
      case 'friend':
        this.setState({
          hover_friend: true
        })
        break;
      default:
        break;
    }
  }
  // 鼠标移出
  outHover = (ev) => {
    switch (ev.target.dataset.hover) {
      case 'find':
        this.timer[0] = 1
        clearInterval(this.timer[0])
        this.timer[0] = setTimeout(() => {
          this.setState({
            hover_find: false
          })
        }, 1000);
        break;
      case 'my':
        this.timer[1] = 1
        clearInterval(this.timer[1])
        this.timer[1] = setTimeout(() => {
          this.setState({
            hover_my: false
          })
        }, 1000);
       
        break;
      case 'friend':
        clearInterval(this.timer[2])
        this.timer[2] = setTimeout(() => {
          this.setState({
            hover_friend: false
          })
        }, 1000);
        
        break;
      default:
        break;
    }
  }
  render() {
    const { hover_find, hover_my, hover_friend } = this.state
 
    return (
      <div className="headers">
        {hover_find}
        <div className="header">
          <Row>
            <Col span={4}>
              <div className="logo">
                <img src={require('../../assets/images/logo.svg')} alt=""/>
                <div className="text">网抑云音乐</div>
              </div>
            </Col>
            <Col span={1}></Col>
            <Col span={2}>
              <div className="find_music">
                <div className="text">发现音乐</div>
                <div className="ul_list">
                  <li>推荐</li>
                  <li>排行榜</li>
                  <li>歌单</li>
                  <li>主播电台</li>
                  <li>歌手</li>
                  <li>新碟上架</li>
                </div>
              </div>
            </Col>
            <Col span={2}>
              <div 
                data-hover="my" 
                className={`my_music ${hover_my?'hover':''}`}
                onMouseOver={this.overHover} 
                onMouseOut={this.outHover} 
              >
                我的音乐
              </div>
            </Col>
            <Col span={2}>
              <div 
                data-hover="friend" 
                className={`friend ${hover_friend?'hover':''}`}
                onMouseOver={this.overHover} 
                onMouseOut={this.outHover} 
              >
                我的朋友
              </div>
            </Col>
            <Col span={3}></Col>
            <Col span={6}>
              <div className="input">
                <div className="center">
                  <SearchOutlined className="icon" />
                  <input type="text" placeholder="音乐/视频/电台/用户" />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className="avatar">
                <img src={require('../../assets/images/logo.svg')} alt=""/>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
