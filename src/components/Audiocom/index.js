import React, { Component } from 'react'
import style from './index.module.scss'
import {MenuUnfoldOutlined,StepForwardOutlined,StepBackwardOutlined ,FolderAddOutlined,DeleteOutlined,CloseOutlined, PlayCircleOutlined,YoutubeOutlined} from '@ant-design/icons'
import { message } from 'antd';
import {checkMusic, getSongUrl} from '../../api/home'

// 事件总线
import bus from '../../utils/bus'

import {formatDuration} from '../../utils/format'

export default class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      top: 0,
      left: 600,
      isShow: false,
      border: 0,
      playList: [],
      count: 0,
      musicList: [],
      scrollList: [],
      topList: [],
      ownList: [],
      audioData: {
        img: 'http://s4.music.126.net/style/web2/img/default/default_album.jpg',
        url: '',
        name: '暂无音乐',
      },
      
      index: 0
    }

    this.audioRef = React.createRef()
  }

  componentDidMount () {
    // 接收值
    bus.on('playMusic', (data)=>{
      this.getUrl(data[data.type][0])
      if(!this.isTure(data)) {
        this.setState({
          playList: [...this.state.playList,...data[data.type]],
          count: this.state.count + data[data.type].length,
          [data.type]: [...this.state[data.type],data.id]
        })
      }
    })
    this.audioRef.current.onended = () =>{
      this.playMuiscBtn(1)
    }
  }
  
  // 判断歌单是否存在 避免key渲染问题
  isTure = (str) => {
    let result = false
    this.state[str.type].forEach(item => {
      if(item === str.id) {
        result = true
      }
    })
    if(str.type === 'ownList' && !result) {
      // eslint-disable-next-line no-unused-expressions
      this.state.playList.forEach(item => {
        if(item.id=== str.ownList[0].id) {
          result = true
        }
      })
    }
    return result
  }
  // 获得音乐url
  getUrl = (data) => {
    
    checkMusic({id: data.id})
      .then(res=>{
        getSongUrl({id:data.id}).then(result => {
          console.log(result.data.data[0].url);
          if(!result.data.data[0].url)  message.info('亲爱的,暂无音源')
          console.log(this.state.playList.length);
          this.setState({
            audioData: {
              img: data.al.picUrl,
              name: data.name,
              url: result.data.data[0].url
            }
          },()=>{
            this.getIndex()
          })
        })
      })
      .catch(err => {
        console.log(err);
          this.setState({
            audioData: {
              img: data.al.picUrl,
              name: data.name,
              url: ''
            }
          },()=>{
            this.getIndex()
          })
          message.info('亲爱的,暂无版权')
      })
  }
  // 获取当前播放歌曲索引
  getIndex = () => {
    console.log(this.state.playList);
    this.state.playList.forEach((item, index) => {
      if(item.name === this.state.audioData.name){
        this.setState({
          index
        })
      }
    })
  }
  // 列表播放
  playMuisc = (index) => {
    this.getUrl(this.state.playList[index])
  }
  // 上下首播放
  playMuiscBtn = (type) => {
    // 1是下一首 2是上一首
    if(this.state.playList.length === 0) return
    if(type === 1) {
      let count = this.state.index + 1
      count === this.state.playList.length ? this.playMuisc(0): this.playMuisc(count) 
    } else if(type === 2) {
      let count = this.state.index - 1
      count < 0 ? this.playMuisc(this.state.playList.length - 1): this.playMuisc(count) 
    }
  }
  // 清除列表
  del = () => {
    this.setState({
      index: 0,
      count:0 ,
      playList: [],
      musicList: [],
      scrollList: [],
      topList: [],
      ownList: [],
      audioData: {
        img: 'http://s4.music.126.net/style/web2/img/default/default_album.jpg',
        url: '',
        name: '暂无音乐',
      },
    })
  }
  // 列表的动画控制
  showList = () => {
    if(!this.state.isShow) {
      this.setState({
        width: 900,
        height: 400,
        top: -400,
        left: 150,
        isShow: true,
        border: `1px solid #5340a7`
      })
    } else {
      this.setState({
        width: 50,
        height: 0,
        top: 0,
        left: 600,
        isShow: false,
        border: 0
      })
    }
  }

  render() {
    const { playList, count, audioData } = this.state
    return (
      <div className={style.player}>
        <div className={style.player_content}>
          <div className={style.player_audio}>
            <audio 
              ref={this.audioRef}
              src={audioData.url}
              controls
              autoPlay
            ></audio>
          </div>
          <div className={style.left}>
            <div className={style.info}>
              <img src={audioData.img} alt=""/>
              <span>{audioData.name}</span>
            </div>
            <div className={style.btn}>
              <div className={style.btn_l}>
                <StepBackwardOutlined 
                  onClick={()=>{this.playMuiscBtn(2)}}
                />
              </div>
              <div>
                <StepForwardOutlined 
                  onClick={()=>{this.playMuiscBtn(1)}}
                />
              </div>
              
            </div>
            
          </div>
          <div className={style.right}>
            <div 
              className={style.content_right}
              onClick={this.showList}
              title="播放列表"
            >
              <MenuUnfoldOutlined />
              <p>{count}</p>
            </div>
          </div>
          <div 
            className={style.play_list}
            
            style={{
              width: this.state.width,
              height: this.state.height,
              top: this.state.top,
              left: this.state.left,
              border: this.state.border
            }}
          >
            <div className={style.title}>
              <div className={style.left_t}>
                播放列表(0)
              </div>
              <div className={style.right_t}>
                <div className={style.all} title="收藏">
                  <FolderAddOutlined />收藏全部
                </div>
                <div 
                  className={style.del} 
                  title="清除"
                  onClick={this.del}
                >
                  <DeleteOutlined />清除
                </div>
                <div className={style.close} onClick={this.showList} title="关闭">
                  <CloseOutlined />
                </div>
              </div>
              
            </div>
            <div className={style.container}>
              <table>
                <tbody>
                  <tr>
                    <th></th>
                    <th colSpan ="2">歌曲标题</th>
                    <th>时长</th>
                    <th>歌手</th>
                    <th>专辑</th>
                  </tr>
                  {/* <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr> */}
                  {
                    playList.map((item,index)=>(
                      <tr key={item.id}>
                        <td>
                          <div className={style.num}>
                            <span>{index+1}</span>
                            <div>
                              <PlayCircleOutlined 
                                title="播放" 
                                onClick={()=>{this.playMuisc(index)}}
                              />
                              <FolderAddOutlined  title="收藏"/>
                            </div>
                          </div>
                        </td>
                        <td colSpan ="2" className={style.name}>
                          <p>
                            {
                              item.mv ? <YoutubeOutlined style={{color:"#fff",marginRight:'10px',current:'pointer'}} title="播放mv"/> : ''
                            }
                            {item.name}
                          </p>
                        </td>
                        <td><p>{formatDuration(item.dt)}</p></td>
                        <td><p>{item.ar[0].name}</p></td>
                        <td><p>{item.al.name}</p></td>
                      </tr>
                    ))
                  }
                  
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
