import React, { Component } from 'react';
import Header from '../../components/Header'
import bus from '../../utils/bus'
import style from './index.module.scss'
import { getUrl, simi, simiMV, hotComments } from '../../api/mv'
import {CaretRightOutlined } from '@ant-design/icons'
import {computePlay, formatDuration} from '../../utils/format'
class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      urlData: {},
      simiList: [],
      info: {},
      hotComments: [],
      total: 0
    }
  }

  componentDidMount () {
    const id = this.props.location.search.slice(4)
    console.log(id);
    id && this.getMvById(id)
  }
  getMvById =(id)=>{
    this.getMvUrl(id)
    this.getSimi(id)
    this.getSimiMv(id)
    this.getHotComments(id)
  }
  getMvUrl = (id) => {
    getUrl({id}).then(res=>{
      this.setState({
        urlData: res.data.data
      })
      
      bus.emit('isShow', false)
    })
  }
  getSimi =(id)=>{
    simi({mvid:id}).then(res=>{
      this.setState({
        simiList: res.data.mvs
      })
    })
  }
  // 获取 mv 数据
  getSimiMv = (id) => {
    simiMV({
      mvid: id
    }).then(res => {
      this.setState({
        info: res.data.data
      })
    })
  }
  // 获取热门评论
  getHotComments = (id) => {
    hotComments({
      id,
      type: 1
    }).then(res=>{
      this.setState({
        total: res.data.total,
        hotComments: res.data.hotComments,
      })
      console.log(res.data);
    })
  }
  toMv =(id) => {
    console.log(this.props);
    this.props.history.push(`/mv?id=${id}`)
    this.getMvById(id)
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <div className={style.mv}>
          <div className={style.left}>
            <div className={style.text}>mv详情:</div>
            <div className={style.video}>
              <video autoPlay controls src={this.state.urlData.url}></video>
            </div>
            <div className={style.info}>
              <div className={style.img}>
                <img src={this.state.info.cover} alt=""/>
                {this.state.info.artistName}
              </div>
              <div className={style.title}>
                <div className={style.t_name}>{this.state.info.name}</div>
                <div className={style.t_info}>
                  <span>发布：{this.state.info.publishTime}</span>
                  <span>播放：{this.state.info.playCount}</span>
                </div>
              </div>
              <div className={style.text_mv}>
                {this.state.info.desc}
              </div>
            </div>

            <div className={style.hot}>
              <div className={style.title}>
                热门评论({this.state.total})
              </div>
              {
                this.state.hotComments.map(item => (
                  <div key={item.commentId} className={style.item}>
                    <img src={item.user.avatarUrl} alt=""/>
                    <div className={style.name}>
                      <span className={style.top}>{item.user.nickname}: &nbsp;</span>
                      <span className={style.bottom}>{item.user.nickname}</span>
                    </div>
                    <span>{item.content}</span>
                  </div>
                ))
              }
              
            </div>
          </div>
          <div className={style.right}>
            <div className={style.text}>相关推荐:</div>
            {
              this.state.simiList.map(item => (
                <div 
                  className={style.item} 
                  key={item.id}
                  onClick={()=>{this.toMv(item.id)}}
                >
                  <div className={style.img}>
                    <img src={item.cover} alt=""/>
                    <span className={style.play_count}><CaretRightOutlined />{computePlay(item.playCount)}</span>
                    <span className={style.play_time}>{formatDuration(item.duration)}</span>
                  </div>  
                  <div className={style.title}>
                    <span className={style.name_mv}>{item.name}</span>
                    <span className={style.name}>{item.artistName}</span>
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>
      </>
    );
  }
}

export default index;