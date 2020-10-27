import React, { Component } from 'react';
import style from './index.module.scss'
import {YoutubeOutlined,PlayCircleOutlined} from '@ant-design/icons'
import {computePlay} from '../../utils/format'
import {getPlayDetail} from '../../api/home'

//图片懒加载
import LazyLoad from 'react-lazyload';

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
    const {data,width} = this.props
    return (
      <div 
        className={style.container}
        style={{width}}
      >
        <div className={style.container_items}>
          <div className={style.pic}>
            <LazyLoad>
              <img src={data.picUrl ? data.picUrl : (data.coverImgUrl)}alt=""/>
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
            </LazyLoad>
            
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