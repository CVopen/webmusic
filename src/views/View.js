/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:54:16 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-30 23:01:53
 */

import React from 'react';
// import userApi from './api/userApi'
import { HashRouter as Router } from 'react-router-dom'
import RouterView from '../router/index'
import config from '../router/config'
import PageLoad from '../components/PageLoad/PageLoad'
// 引入redux
import Audiocom from '../components/Audiocom'
import {  connect } from 'react-redux'
import './View.scss'
class View extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }
  setAnimation = () => {
    setTimeout(() => {
      this.setState({
        isShow: false
      })
      document.body.style.overflow = 'auto'
    }, 5000);
  }
  componentDidMount () {
    this.setAnimation()
    this.isLogin()
  }
  // 判断当前是否登录
  isLogin = () => {
    const user = window.localStorage.getItem('userInfo')
    if(user) {
      this.props.sendAction(JSON.parse(user))
    }

  }
  render () {
    return (
      <>
        {this.state.isShow ? (<PageLoad />) : null}
        <Router>
            <RouterView routes={config }/>
        </Router>
        <Audiocom/>
      </>
    )
  }
}
const mapStateToPros = state => {
  return {userInfo: state.userInfo}
}
const mapDispatchToProps = dispatch => {
  return {
    sendAction: (data)=> {
      dispatch({
        type: 'set_userinfo',
        value: data
      })
    }
  }
}

export default connect(mapStateToPros,mapDispatchToProps)(View);
