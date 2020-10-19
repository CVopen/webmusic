/*
 * @Author: xyh 
 * @Date: 2020-09-28 19:21:40 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-19 23:48:22
 */
import React, { Component } from 'react'
import style from './index.module.scss'
import Swiper from '../../../components/Swiper'

export default class Discover extends Component {
  render() {
    return (
      <div className={style.content}>
        <Swiper {...this.props} />
      </div>
    )
  }
}
