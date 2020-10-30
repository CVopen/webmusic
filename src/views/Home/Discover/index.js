/*
 * @Author: xyh 
 * @Date: 2020-09-28 19:21:40 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-30 10:52:59
 */
import React, { Component } from 'react'
import style from './index.module.scss'
import Swiper from '../../../components/home/Swiper'
import Personalized from '../../../components/home/Personalized/index'
import Toplist from '../../../components/home/Toplist'
import Scroll from '../../../components/home/Scroll'
import {connect} from 'react-redux'
class Discover extends Component {

  toLogin = () => {
    this.props.history.push('/login')
  }
  render() {
    const { userInfo } =this.props
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
                
                

                {
                  !userInfo.profile ? (
                    <div className={style.text}>
                      <span>
                        登录网抑云音乐，可以享受无限收藏的乐趣，并且可以无限同步到手机
                      </span>
                      <div className={style.btn}>
                        <button onClick={this.toLogin}>用户登录</button>
                      </div>
                    </div>
                  ) : (
                    <div className={style.user}>
                      <div className={style.user_info}>
                        <div className={style.img}>
                          <img src={userInfo.profile.avatarUrl} alt=""/>

                        </div>
                        <div className={style.u_text}>
                          <a style={{color: '#000',fontSize:'16px',fontWeight:550}} href="#/me">{userInfo.profile.nickname}</a>
                          <a style={{color: '#ccc',fontSize:'16px',fontWeight:500}} href="/">等级:0</a>
                          <button >签到</button>
                        </div>
                      </div>
                      <div className={style.count}>
                        <div className={style.count_info}>
                          <span>{userInfo.profile.eventCount}</span>
                          <span>动态</span>
                        </div>
                        <div className={style.count_info} style={{borderLeft:'1px solid #ccc',borderRight: '1px solid #ccc'}}>
                          <span>{userInfo.profile.follows}</span>
                          <span>关注</span>
                        </div>
                        <div className={style.count_info}>
                          <span>{userInfo.profile.followeds}</span>
                          <span>粉丝</span>
                        </div>
                      </div>
                    </div>
                  )
                }

                
              
                </div>
              <Scroll />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {userInfo: state.userInfo}
}

export default connect(mapStateToProps)(Discover)