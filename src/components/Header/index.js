/*
 * @Author: xyh 
 * @Date: 2020-09-25 13:18:30 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-30 19:24:35
 */
import React, { Component } from 'react'
import style from './index.module.scss'
import { Row, Col } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import {logout} from '../../api/userApi'
class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }

  toHome = () => {
    
    console.log(this.props);
    this.props.history.push('/')
  }
  toPath = (e) => {
    const path = e.target.dataset.path
    console.log(path);
    if(path === 'mv') {
      this.props.history.push(`/${path}`)
    } else {
      this.props.history.push(`/index/${path}`)
    }
  }
  // 退出登录
  loginOut = () => {
    
    logout().then(res=>{
      this.props.sendAction()
      window.localStorage.removeItem('userInfo')
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('cookie')
    })
  }
  toLogin = () => {
    this.props.history.push('/login')
  }
  render() {
    const {userInfo} = this.props
    return (
      <div className={style.headers}>
        <div className={style.header}>
          <Row>
            <Col span={4}>
              <div className={style.logo}>
                <img src={require('../../assets/images/logo.svg')} alt=""/>
                <div className={style.text} onClick={this.toHome}>网抑云音乐</div>
              </div>
            </Col>
            <Col span={1}></Col>
            <Col span={2}>
              <div className={style.find_music}>
                <div className={style.text}>发现音乐</div>
                <ul className={style.ul_list} onClick={this.toPath}>
                  <li data-path="discover">推荐</li>
                  <li data-path="toplist">排行榜</li>
                  <li data-path="playlist">歌单</li>
                  <li data-path="djradio">主播电台</li>
                  <li data-path="artist">歌手</li>
                  <li data-path="album">新碟上架</li>
                  {/* <li data-path="mv">mv</li> */}
                </ul>
              </div>
            </Col>
            <Col span={2}>
              <div className={style.my_music}>我的音乐</div>
            </Col>
            <Col span={2}>
              <div className={style.friend}>我的朋友</div>
            </Col>
            <Col span={3}></Col>
            <Col span={6}>
              <div className={style.input}>
                <div className={style.center}>
                  <SearchOutlined className={style.icon} />
                  <input type="text" placeholder="音乐/视频/电台/用户" />
                </div>
              </div>
            </Col>
            <Col span={4}>
              <div className={style.avatar}>
                
                {
                  userInfo.profile === undefined ? (
                    <span onClick={this.toLogin}>登 录</span>
                    
                  ) : (
                    <>
                      <img src={userInfo.profile.avatarUrl} alt=""/>
                      <ul>
                        <li onClick={this.loginOut}>退出登录</li>
                      </ul>
                    </>
                  )
                }
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {userInfo: state.userInfo}
}
const mapDispatchToProps = dispatch => {
  return {
    sendAction: ()=> {
      dispatch({
        type: 'set_userinfo',
        value: {}
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)