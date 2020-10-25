import React, { Component } from 'react'
import style from './index.module.scss'
import { DoubleRightOutlined,PlayCircleOutlined  } from '@ant-design/icons';
import {albumList, getAlbumMusic} from '../../../api/home'
// 事件总线
import bus from '../../../utils/bus'
export default class Scroll extends Component {

  constructor(props) {
    super(props)
    this.state = {
      albumList: []
    }
  }

  componentDidMount () {
    this.getAlbum()
  }
  getAlbum = ()=> {
    albumList({limit:10}).then(res => {
      console.log(res)
      this.setState({
        albumList: [...res.data.products,...res.data.products]
      })
    })
  }
  playList = (list) => {
    getAlbumMusic({id: list.albumId}).then(res=>{
      // console.log(res.data.songs);
      bus.emit('playMusic', {
        scrollList: res.data.songs,
        type: 'scrollList',
        id: list.albumId
      })
    })
  }
  render() {
    return (
      <div className={style.scroll}>
        <div className={style.title}>
          <div className={style.content}>
            <span className={style.outside}>
              <span className={style.inside}></span>
            </span>
            <span className={style.text}>新碟上架</span>
          </div>
          <div className={style.more}>
            更多<DoubleRightOutlined style={{fontSize: '14px', color: '#5340a7'}} />
          </div>
        </div>
        <div className={style.line}>
        </div>
        <div className={style.animate}>
          <div className={style.container}>
            {
              this.state.albumList.map((item, index) => (
                <div 
                  className={style.item}
                  key={index}
                >
                  <img title={item.albumName} src={item.coverUrl} alt=""/>
                  <div 
                    className={style.logo} 
                    onClick={()=>{this.playList(item)}}
                  >
                    <PlayCircleOutlined />
                  </div>
                  <div className={style.albumName}>《{item.albumName}》</div>
                  <div className={style.name}>{item.artistName}</div>
                </div>
              ))
            }
          </div>
          
          
        </div>
      </div>
    )
  }
}
