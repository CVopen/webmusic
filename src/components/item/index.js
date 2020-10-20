import React, { Component } from 'react';
import style from './index.module.scss'
import {YoutubeOutlined,PlayCircleOutlined} from '@ant-design/icons'
class Item extends Component {

  computePlay = (num) => {
    if(num > 100000) {
      return `${num.toString().substring(0, num.toString().length - 4)}万`
    }
    return num
  }

  render() {
    const {data} = this.props
    console.log(data);
    return (
      <div className={style.container}>
        <div className={style.container_items}>
          <div className={style.pic}>
            <img src={data.picUrl}alt=""/>
            <div className={style.black}>
              <div className={style.play}>
                <div className={style.left}>
                  <YoutubeOutlined/>
                  <span>{this.computePlay(data.playCount)}</span>
                </div>
                <div className={style.right}>
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