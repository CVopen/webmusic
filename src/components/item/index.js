import React, { Component } from 'react';
import style from './index.module.scss'
import {YoutubeOutlined,PlayCircleOutlined} from '@ant-design/icons'
import {computePlay} from '../../utils/format'
import {getPlayDetail} from '../../api/home'

// 事件总线
import bus from '../../utils/bus'

class Item extends Component {

  getDetail(data) {
    console.log(data);
    getPlayDetail({id: data.id}).then(res=>{
      bus.emit('playMusic', {
        musicList: res.data.playlist.tracks,
        type: 'musicList',
        id: data.id
      })
    })
  }

  render() {
    const {data} = this.props
    return (
      <div className={style.container}>
        <div className={style.container_items}>
          <div className={style.pic}>
            <img src={data.picUrl}alt=""/>
            <div className={style.black}>
              <div className={style.play}>
                <div className={style.left}>
                  <YoutubeOutlined/>
                  <span>{computePlay(data.playCount)}</span>
                </div>
                <div 
                  title="播放" 
                  className={style.right}
                  onClick={()=>this.getDetail(data)}
                >
                  <PlayCircleOutlined style={{color:'#333'}}/>
                </div>
              </div>
            </div>
          </div>
          <div className={style.text}>
            {data.name}
          </div>
        </div>
        
      </div>
    );
  }
}

export default Item;