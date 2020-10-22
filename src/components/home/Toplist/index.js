import React, { Component } from 'react'
import style from './index.module.scss'
import { DoubleRightOutlined } from '@ant-design/icons';
import Topitem from './component/index'
import {topList, topDetail} from '../../../api/home/index'
export default class Toplist extends Component {

  constructor(props){
    super(props)
    this.state = {
      topList: [],
      musicList: []
    }
  }

  componentDidMount () {
    this.getData()
  }
  getData = ()=> {
    topList().then(res => {
      this.setState({
        topList: res.data.list.slice(0,3)
      },()=>{
        let arr = []
        this.state.topList.forEach(async item => {
          const {data} = await topDetail({id: item.id})
          arr.push(data.playlist)
          if(arr.length === 3) {
            this.setState({
              musicList: arr
            })
          }
        })
      })
    })
  }
  render() {
    return (
      <div className={style.toplist}>
        <div className={style.title}>
          <div className={style.content}>
            <span className={style.outside}>
              <span className={style.inside}></span>
            </span>
            <span className={style.text}>榜单</span>
          </div>
          <div className={style.more}>
            更多<DoubleRightOutlined style={{fontSize: '14px', color: '#5340a7'}} />
          </div>
        </div>
        <div className={style.line}>
        </div>
        <div className={style.container}>
          {
            this.state.topList.map((item,index)=>(
              <Topitem 
                key={item.id} 
                topList={item} 
                musicList={this.state.musicList[index]} 
              />
            ))
          }
        </div>
      </div>
    )
  }
}
