import React, { Component } from 'react'
import style from './index.module.scss'
import { DoubleRightOutlined } from '@ant-design/icons';
import {albumList} from '../../../api/home'
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
                  <img src={item.coverUrl} alt=""/>
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
