import React, { Component } from 'react'
import style from './index.module.scss'
import { PlayCircleOutlined,FolderAddOutlined,PlusOutlined,DoubleRightOutlined } from '@ant-design/icons';
export default class Topitem extends Component {
  render() {
    const {topList,musicList} = this.props
    // const track = musicList.tracks.slice(0,10)
    // console.log(musicList['tracks']);
    return (
      <div className={style.top_item}>
        <div className={style.title}>
          <img className={style.logo} src={topList.coverImgUrl} alt=""/>
          <div className={style.right}>
            <div className={style.text}>{topList.name}</div>
            <div className={style.icons}>
              <PlayCircleOutlined style={{fontSize: '24px'}}/>
              <FolderAddOutlined style={{fontSize: '26px'}}/>
            </div>
          </div>
        </div>

        <div className={style.music_list}>
          {
            musicList && musicList.tracks.slice(0,10).map((item,index)=>(
              <div key={index} className={style.music}>
                <div className={style.num}>{index + 1}</div>
                <div className={style.name}>{item.name}</div>
                <div className={style.icons}>
                  <PlayCircleOutlined />
                  <PlusOutlined />
                  <FolderAddOutlined />
                </div>
              </div>
            ))
          }
          
          <div className={style.bottom_more}>
            查看全部<DoubleRightOutlined />
          </div>
          
        </div>
      </div>
    )
  }
}
