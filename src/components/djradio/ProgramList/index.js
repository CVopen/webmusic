import React, { Component } from 'react'
import style from './index.module.scss'
export default class index extends Component {

  renderEl = (data) => (
    data.map(item => {
      if(item.program) {
        return (<div key={item.program.id} className={style.item}>
          <img src={item.program.coverUrl} alt=""/>
          <div style={{width: 450}}>
            <p style={{width: 420}}>{item.program.name}</p>
            <span>{item.program.radio.name}</span>
          </div>
        </div>)
      } else {
        return (<div key={item.id} className={style.item}>
          <img src={item.coverUrl} alt=""/>
          <div>
            <p>{item.name}</p>
            <span>{item.radio.name}</span>
          </div>
          <span className={style.tag}>
            {item.radio.category}
          </span>
          
        </div>)
      }
      
    })
  )
  // renderEl2 = (data) => (
  //   data.map(item => (
  //     // <div key={item.program.id} className={style.item}>
  //     //   <img src={item.program.radio.picUrl} alt=""/>
  //     //   <div>
  //     //     <p>{item.program.name}</p>
  //     //     <span>{item.program.radio.name}</span>
  //     //   </div>
  //     // </div>
  //   ))
  // )
  render() {
    const { title, data } = this.props
    return (
      <div className={style.container}>
        <div className={style.title}>
          <span className={style.t_left}>{title}</span>
          <span className={style.t_right}>更多 {'>'}</span>
        </div>
        <div className={style.content}>
          {this.renderEl(data)}
          
        </div>
      </div>
    )
  }
}
