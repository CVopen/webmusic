/*
 * @Author: xyh 
 * @Date: 2020-09-20 18:29:16 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-23 20:58:10
 */
import React, { Component } from 'react';
import './PageLoad.scss'
import { connect } from 'react-redux'
class PageLoad extends Component {


  
  render() {
    return (
      <div className="page op">
        <img src={require("../../assets/images/loading.gif")} alt="loading图片"/>
        <div>正在加载中&nbsp;&nbsp;请稍等....</div>
      </div>
    )
  }
}
const mapstateToProps = (state, ownProps) => {
  return {...state}
}
const mapDispatchToProps = dispatch => {
  return {
    onClickOf: title => {
      dispatch(title)
    }
  }
}
export default connect(mapstateToProps,mapDispatchToProps)(PageLoad);