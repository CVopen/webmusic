/*
 * @Author: xyh 
 * @Date: 2020-09-25 13:18:30 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-28 16:08:09
 */
import React, { Component } from 'react'
import './index.scss'
import { Row, Col } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
export default class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }

  toHome = () => {
    
    console.log(this.props);
    this.props.history.push('/')
  }
  toPath = (e) => {
    const path = e.target.dataset.path
    this.props.history.push(`/index/${path}`)
  }
  render() {
 
    return (
      <div className="headers">
        <div className="header">
          <Row>
            <Col span={4}>
              <div className="logo">
                <img src={require('../../assets/images/logo.svg')} alt=""/>
                <div className="text" onClick={this.toHome}>网抑云音乐</div>
              </div>
            </Col>
            <Col span={1}></Col>
            <Col span={2}>
              <div className="find_music">
                <div className="text">发现音乐</div>
                <div className="ul_list">
                  <li data-path="discover" onClick={this.toPath} >推荐</li>
                  <li data-path="toplist" onClick={this.toPath} >排行榜</li>
                  <li data-path="playlist" onClick={this.toPath} >歌单</li>
                  <li data-path="djradio" onClick={this.toPath} >主播电台</li>
                  <li data-path="artist" onClick={this.toPath} >歌手</li>
                  <li data-path="album" onClick={this.toPath} >新碟上架</li>
                </div>
              </div>
            </Col>
            <Col span={2}>
              <div className={`my_music`}>我的音乐</div>
            </Col>
            <Col span={2}>
              <div className={`friend`}>我的朋友</div>
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
