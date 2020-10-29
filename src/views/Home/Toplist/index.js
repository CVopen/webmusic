import React, { Component } from 'react'
import style from './index.module.scss'

import { topList, topDetail} from '../../../api/home'
import { FolderAddOutlined, PlayCircleOutlined} from '@ant-design/icons'
import PlayList from '../../../components/PlayList'

import bus from '../../../utils/bus'

export default class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      topList: [],
      topMusicList: [],
      index: '',
      tracks: []
    }
  }

  componentDidMount() {
    // console.log(this.props);
    
    this.getTopList()
  }
  // 获取榜单
  getTopList = async () => {
    const {data} = await topList()
    this.setState({
      topList: data.list
    },()=>{
      const id = this.props.history.location.search.replace(/[^0-9]/ig,"")
      // console.log(id);
      if(id){
        this.setState({
          index: id
        })
      } else {
        this.setState({
          index: this.state.topList[0].id,
          topMusicList: this.state.topList[0]
        })
      }
    })
    // console.log(this.state.index);
    this.getTopListDetail(this.state.index)
  }
  // 获取榜单数据
  getTopListDetail = (ids) => {
    topDetail({id:ids}).then(res=>{
      this.state.topList.forEach((item,index) => {
        if(item.id.toString() === ids.toString()) {
          this.setState({
            topMusicList: this.state.topList[index],
            tracks: res.data.playlist.tracks,
            index: ids
          })
        }
      })
      // console.log(this.state);
    })
  }

  //播放歌单
  playList = () => {
    bus.emit('playMusic', {
      topList: this.state.tracks,
      type: 'topList',
      id: this.state.index
    })
  }
  render() {
    
    return (
      <div className={style.content}>
        <div className={style.left}>
          <TopList {...this.props} setData={this.getTopListDetail} title="云音乐特色榜" list={this.state.topList.slice(0,4)} />
          <TopList {...this.props} setData={this.getTopListDetail} title="全球媒体榜" list={this.state.topList.slice(4)}/>
        </div>
        <div className={style.right}>
          <div className={style.top_title}>
            <div className={style.title}>
              <div className={style.t_left}>
                <img src={this.state.topMusicList.coverImgUrl} alt=""/>
              </div>
              <div className={style.t_right}>
                <p>{this.state.topMusicList.name}({this.state.topMusicList.updateFrequency})</p>
                <div>
                  <button onClick={this.playList}><PlayCircleOutlined/>播放</button>
                  <button><FolderAddOutlined/>({this.state.topMusicList.subscribedCount})</button>
                </div>
              </div>
            </div>
            <div className={style.bottom}>
              <div className={style.b_left}>
                <span>歌曲列表</span>
                {this.state.topMusicList.trackCount}首歌
              </div>
              <div className={style.b_right}>
                播放:
                <span>{this.state.topMusicList.playCount}</span>
                次
              </div>
            </div>
          </div>
          <PlayList playList={this.state.tracks}/>
        </div>
      </div>
    )
  }
}

// 列表简单 组件写在下方
class TopList extends Component {

  tolist=(data)=>{
    // this.props.history.push({pathname:'/index/toplist',state:{id:data.id}})
    this.props.history.push(`/index/toplist?id=${data.id}`)
    this.props.setData(data.id)
    // this.props.history.push(`/index/toplist`,{name: '123'})
  }

  render() {
    const { title, list } = this.props
    return(
      <div className={style.top_list}>
        <div className={style.list_title}>
          {title}
        </div>
        {
          list.map(item => (
            <div 
              className={[style.list]}
              key={item.id}
              onClick={()=>{this.tolist(item)}}
            >
              <img src={item.coverImgUrl} alt=""/>
              <div>
                <span className={style.top_name}>{item.name}</span>
                <span className={style.updated}>{item.updateFrequency}</span>
              </div>
            </div>
          ))
        }
        
      </div>
    )
  }
}