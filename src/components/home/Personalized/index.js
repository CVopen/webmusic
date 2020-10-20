import React, { Component } from 'react'
import style from './index.module.scss'
import { DoubleRightOutlined } from '@ant-design/icons';
import {homePersonalized} from '../../../api/home/index'
import Item from '../../item/index'
export default class Personalized extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    homePersonalized({limit:12}).then(res => {
      this.setState({
        list: res.data.result
      })
    })
  }

  render() {
    return (
      <div className={style.personalized}>
        <div className={style.header}>
          <div className={style.content}>
            <div className={style.title}>
              <span className={style.outside}>
                <span className={style.inside}></span>
              </span>
              <span className={style.text}>热门推荐</span>
            </div>
            <ul>
              <li><span>华语</span></li>
              <li><span>流行</span></li>
              <li><span>摇滚</span></li>
              <li><span>民谣</span></li>
              <li><span>电子</span></li>
            </ul>
            <div className={style.more}>
              更多<DoubleRightOutlined style={{fontSize: '14px', color: '#5340a7'}} />
            </div>
          </div>
          
          <div className={style.line}></div>
        </div>
        <div className={style.items}>
          {
            this.state.list.map((item,index)=>(
              
              <Item 
                key={item.id}
                data={item}
              />
            ))
          }
        </div>
      </div>
    )
  }
}
