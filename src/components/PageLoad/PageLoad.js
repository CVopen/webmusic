/*
 * @Author: xyh 
 * @Date: 2020-09-20 18:29:16 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-22 11:58:52
 */
import React, { Component } from 'react';
import './PageLoad.scss'
import { connect } from 'react-redux'
class PageLoad extends Component {


  
  render() {
    return (
      <div className="page op">
        <img src={require("../../assets/images/loading.gif")} alt="loading图片"/>
        {this.props.title}
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