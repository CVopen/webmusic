/*
 * @Author: xyh 
 * @Date: 2020-09-28 19:21:40 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-29 10:55:40
 */
import React, { Component } from 'react'
import style from './index.module.scss'
import Swiper from '../../../components/home/Swiper'
import Personalized from '../../../components/home/Personalized/index'
import Toplist from '../../../components/home/Toplist'
import Scroll from '../../../components/home/Scroll'
import bus from '../../../utils/bus'
export default class Discover extends Component {

  toLogin = () => {
    console.log(this.props);
    this.props.history.push('/login')
    bus.emit('location')
  }

  render() {
    return (
      <div className={style.content}>
        <Swiper {...this.props} />
        <div className={style.container}>
          <div className={style.content_two}>
            <div className={style.left}>
              <Personalized {...this.props}/>
              <Toplist {...this.props} />
            </div>
            <div className={style.right}>
              <div className={style.loginInfo}>
                <div className={style.text}>
                  <span>
                    登录网抑云音乐，可以享受无限收藏的乐趣，并且可以无限同步到手机
                  </span>
                  <div className={style.btn}>
                    <button onClick={this.toLogin}>用户登录</button>
                  </div>
                </div>
              </div>
              
              <Scroll />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
