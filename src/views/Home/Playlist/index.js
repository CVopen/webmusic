import React, { Component } from 'react'
import style from './index.module.scss'
import {DownOutlined, GlobalOutlined, DatabaseOutlined, CoffeeOutlined,FrownOutlined,CustomerServiceOutlined} from '@ant-design/icons'
import {catlist, playlist} from '../../../api/playlist'
import Item from '../../../components/item'
import zhCN from 'antd/lib/locale/zh_CN';
import { Pagination, ConfigProvider  } from 'antd';
export default class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      catList: [],
      style: {
        top: -800,
        left: 130,
        opacity: 0,
      },
      order: '',
      cat: '全部',
      limit: '35',
      offset: '',
      playList: [],
      total: 0,
    }
  }

  componentDidMount(){
    this.isTagAndOrder()
    this.getCatlist()
    this.getPlayList()
  }
  // 判断当前路由参数
  isTagAndOrder = () => {
    const tag = this.props.history.location.search
    if( !tag ) return
    
    if(!(tag.indexOf('&') === -1)) {
      tag.split('&').forEach((item,index) => {
        this.setState({
          [item.slice(index === 0 ? 1 : 0, item.indexOf('='))]: item.slice(item.indexOf('=') + 1)
        }, () => {
          if(tag.split('&').length.toString() === (index+1).toString()) {
            this.getPlayList()
          }
        })

      })
      
      return
    }
    this.setState({
      [tag.slice(1,tag.indexOf('='))] : tag.slice(tag.indexOf('=')+1)
    },()=>{
      this.getPlayList()
    })
  }
  // 获取歌单分类
  getCatlist = () => {
    
    catlist().then(res=> {
      console.log(res.data);
      let arr = []
      
      for (const key in res.data.categories) {
        arr[key] = {
          title: res.data.categories[key],
          sub: []
        }
        res.data.sub.forEach((item) => {
          if(item.category.toString() === key.toString()) {
            arr[key].sub.push(item)
          }
        })
      }
      console.log(arr);
      this.setState({
        catList: arr
      })
    })
  }
  getPlayList = () => {
    const params ={
      order: this.state.order,
      cat: decodeURI(this.state.cat),
      limit: this.state.limit,
      offset: this.state.offset
    }
    playlist(params).then(res => {
      this.setState({
        playList: res.data.playlists,
        total: res.data.total
      })
    })
  }
  showInfo = () => {
    this.setState({
      style: {
        opacity: this.state.style.opacity ? 0 : 1,
        top: this.state.style.opacity ? -800 : 85, 
        left: 130, 
      }
    })
  }
  toPlay = (data) => {
    console.log(data);
    if(data) {
      this.setState({
        cat: data.name,
        limit: '',
        offset: '',
        page: 1,
        style: {
          opacity: this.state.style.opacity ? 0 : 1,
          top: this.state.style.opacity ? -800 : 85, 
          left: 130, 
        }
      }, ()=>{
        this.props.history.push(`/index/playlist?${this.state.order?`order=${this.state.order}&`:''}cat=${data.name}`)
        this.getPlayList()
      })
      return 
    }
    
    this.setState({
      cat: '全部',
      order: '',
      limit: 35,
      offset: 0,
      style: {
        opacity: this.state.style.opacity ? 0 : 1,
        top: this.state.style.opacity ? -800 : 85, 
        left: 130, 
      }
    }, () => {
      this.getPlayList()
      this.props.history.push(`/index/playlist`)
    })
  }
  checkOrder = () =>{
    this.setState({
      order: this.state.order=== 'new' ? 'hot' : 'new',
      limit: 35,
      offset: 0,
    },()=>{
      
      this.props.history.push(`/index/playlist?order=${this.state.order}${this.state.cat !== '全部' ? `&cat=${this.state.cat}`:''}`)
      this.getPlayList()
    })
  }
  onChange =(page, pageSize) => {
    console.log(page, pageSize);
    this.setState({
      limit: pageSize,
      offset: (page - 1) > 0 ? (page - 1) * pageSize : 0,
      order: this.state.order=== 'new' ? this.state.order :'hot' ,
    }, () => {
      this.props.history.push(`/index/playlist?order=${this.state.order}&cat=${this.state.cat}&limit=${this.state.limit}&offset=${this.state.offset}`)
      this.getPlayList()
    })
  }
  render() {
    const { catList,cat } = this.state;
    return (
      <div className={style.container}>
        <div className={style.title}>
          <div className={style.left}>
            <span>{decodeURI(cat)}</span>
            <button 
              className={style.all}
              onClick={this.showInfo}
            >
              选择分类
              <DownOutlined style={{fontSize: '14px',marginRight: 0}}/>
            </button>
          </div>
          <div className={style.right}>
            <button onClick={this.checkOrder}>{this.state.order==='new' ? '热门' : '新上'}</button>
          </div>
          <div 
            className={style.info} 
            style={{opacity: this.state.style.opacity,top:this.state.style.top,left:this.state.style.left}}
          >
            <div className={style.i_title}>
              <span onClick={()=>{this.toPlay()}}>全部</span>
            </div>
            {
              catList.map((item,index) => (
                <div className={style.tag} key={index}>
                  <div className={style.tag_title}>
                    {index === 0 ? <GlobalOutlined /> : ''}
                    {index === 1 ? <DatabaseOutlined /> : ''}
                    {index === 2 ? <CoffeeOutlined /> : ''}
                    {index === 3 ? <FrownOutlined /> : ''}
                    {index === 4 ? <CustomerServiceOutlined /> : ''}
                    <span className={style.title_span}>{item.title}</span>
                  </div>
                  <div className={style.tag_content}>
                    
                    {
                      item.sub ? item.sub.map((item,index) => (
                        <span key={index} onClick={()=>{this.toPlay(item)}}>{item.name}</span>
                      )) : ''
                    }
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>
        <div className={style.container} style={{height: this.state.playList.length <15?687:''}}>
          {
            this.state.playList.map(item => (
              <Item 
                key={item.id}
                data={item}
                width={'20%'}
              />
            ))
          }
        </div>
        <div className={style.page}>
          <ConfigProvider locale={zhCN}>
            
            <Pagination 
              total={this.state.total}
              defaultPageSize={this.state.limit}
              // hideOnSinglePage
              showSizeChanger 
              onChange={this.onChange}
              defaultCurrent={(this.state.offset / this.state.limit)+1}
              pageSizeOptions={[20,30,35,40]}
            />
          </ConfigProvider>
        </div>
      </div>
    )
  }
}
