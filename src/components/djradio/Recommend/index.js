import React, { Component } from 'react'
import style from './index.module.scss'
export default class index extends Component {
  render() {
    const {data} = this.props
    return (
      <div className={style.container}>
        <div className={style.title}>
          <span className={style.t_left}>
            {data.title}
          </span>
          <span className={style.t_right}>
            更多 {'>'}
          </span>
        </div>
        
        <div className={style.recom}>

          {
            data.data.map(item => (
              <div key={item.id} className={style.item}>
                <div className={style.content}>
                  <img src={item.picUrl} alt=""/>
                  <div className={style.text}>
                    <span>{item.name}</span>
                    {item.rcmdtext}
                  </div>
                </div>
              </div>
            ))
          }
          {/* <div className={style.content}>
            <img src="http://p2.music.126.net/_qbQ0RvRNrIlhpk1MVMWUw==/109951165226899212.jpg?param=200y200" alt=""/>
            <div className={style.text}>
              <span>美好分贝</span>
              金晨化身DJ，畅聊初心
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}
