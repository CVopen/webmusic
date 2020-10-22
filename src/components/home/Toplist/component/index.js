import React, { Component } from 'react'
import style from './index.module.scss'
import { PlayCircleOutlined,FolderAddOutlined,PlusOutlined  } from '@ant-design/icons';
export default class Topitem extends Component {
  render() {
    const {topList,musicList} = this.props
        console.log(musicList)
    // const track = musicList.tracks.slice(0,10)
    // console.log(musicList['tracks']);
    return (
      <div className={style.top_item}>
        <div className={style.title}>
          <img className={style.logo} src={topList.coverImgUrl} alt=""/>
          <div className={style.right}>
            <div className={style.text}>{topList.name}</div>
            <div className={style.icons}>
              <PlayCircleOutlined style={{fontSize: '24px', color: '#cccccc'}}/>
              <FolderAddOutlined style={{fontSize: '26px', color: '#cccccc'}}/>
            </div>
          </div>
        </div>

        <div className={style.music_list}>
          {
            musicList && musicList.tracks.slice(0,10).map((item,index)=>(
              <div key={index} className={style.music}>
                <div className={style.num}>{index}</div>
                <div className={style.name}>{item.name}</div>
                <div className={style.icons}>
                  <PlayCircleOutlined />
                  <PlusOutlined />
                  <FolderAddOutlined />
                </div>
              </div>
            ))
          }
          
          
        </div>
      </div>
    )
  }
}
