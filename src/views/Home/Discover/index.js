/*
 * @Author: xyh 
 * @Date: 2020-09-28 19:21:40 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-20 15:50:52
 */
import React, { Component } from 'react'
import style from './index.module.scss'
import Swiper from '../../../components/home/Swiper'
import Personalized from '../../../components/home/Personalized/index'

export default class Discover extends Component {

  render() {
    return (
      <div className={style.content}>
        <Swiper {...this.props} />
        <div className={style.container}>
          <div className={style.content_two}>
            <div className={style.left}>
              <Personalized {...this.props}/>
            </div>
            <div className={style.right}>2</div>
          </div>
        </div>
      </div>
    )
  }
}
