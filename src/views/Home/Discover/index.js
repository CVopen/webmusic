/*
 * @Author: xyh 
 * @Date: 2020-09-28 19:21:40 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-07 18:04:13
 */
import React, { Component } from 'react'
import Swiper from '../../../components/Swiper'

export default class Discover extends Component {
  render() {
    return (
      <div>
        <Swiper {...this.props} />
      </div>
    )
  }
}
