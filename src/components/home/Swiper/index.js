/*
 * @Author: xyh 
 * @Date: 2020-09-28 16:10:50 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-30 00:45:48
 */
import React, { Component } from 'react'
import style from './index.module.scss'
import {homeBanner} from '../../../api/home/index'
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
//图片懒加载
import LazyLoad from 'react-lazyload';
export default class index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      list: [],
      height: '',
      width: ''
    }
    this.count = 0
    this.timer = ''
    this.background = React.createRef();
  }

  swiperAnimetion = () => {
     this.timer = setInterval(() => {
      this.count++
      if (this.count >= this.state.list.length) {
        this.count = 0
      }
      
      this.setState({
        count: this.count
      },()=>{
        this.changeBack()
      })
      
    }, 3500)
  }
  changeBack = () =>{
    this.background.current.style.backgroundImage = `url('${this.state.list[this.state.count].imageUrl}')`
  }
  handleClick = (e) => {
    console.log(e.target.dataset);
    // this.props.history.push('')
  }
  clickCircle = (e) => {
    this.count = e.target.dataset.id - 0
    this.setState({
      count: e.target.dataset.id - 0
    },()=>{
      this.changeBack()
    })
    
    
    clearInterval(this.timer)
    this.swiperAnimetion()
  }
  clickBtnLeft = () => {
    this.count--
    if (this.count < 0) {
      this.count = this.state.list.length - 1
    }
    this.setState({
      count: this.count
    },()=>{

      this.changeBack()
    })
    clearInterval(this.timer)
    this.swiperAnimetion()
  }
  clickBtnRight = () => {
    this.count++
    if (this.count > this.state.list.length - 1) {
      this.count = 0
    }
    this.setState({
      count: this.count
    },()=>{

      this.changeBack()
    })
    clearInterval(this.timer)
    this.swiperAnimetion()
  }
  getBannerData = async () => {
    const { data } = await homeBanner()
    let img = new Image()
    img.src = data.banners[0].imageUrl
    // 图片加载成功后
    this.background.current.style.backgroundImage = `url('${data.banners[0].imageUrl}')`
    img.onload = () => {
      this.setState({
        list: data.banners,
        height: 1200 * img.height / img.width,
        width: data.banners.length * 40
      },()=>{
        
        this.swiperAnimetion()
      })
    }
    
  }
  componentDidMount () {
    this.getBannerData()
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div className={style.box}>
        <div ref={this.background} style={{height: this.state.height}} className={style.bgi}>
        </div>
        <div className={style.topBanner}>
          
          <div className={style.swiper} style={{height: this.state.height}}>
              <ul 
                onMouseOver={()=>clearInterval(this.timer)} 
                onMouseOut={()=>this.swiperAnimetion()}
                className={style.banner} 
                style={{height: this.state.height}} 
                onClick={this.handleClick} 
              >
                {
                  this.state.list.map((item,index) => (
                    <li 
                      key={index}
                      style={{opacity: this.state.count === index?1:0, zIndex: this.state.count === index?1:0, height: this.state.height}}
                    >
                      <LazyLoad>
                        <img 
                          src={item.imageUrl} 
                          alt=""
                          data-id={item.encodeId}
                        />
                      </LazyLoad>
                    </li>
                  ))
                }
              </ul>
              <ul className={style.circle} style={{width: this.state.width}}>
                {
                  this.state.list.map((item, index) => (
                    <li key={index} >
                      <span data-id={index} onClick={this.clickCircle} className={this.state.count === index ? style.checkCircle: ''}></span>
                    </li>
                  ))
                }
              </ul>
              <div className={style.btn}>
                <div >
                  <CaretLeftFilled onClick={this.clickBtnLeft} style={{fontSize: '100px', color: 'rgba(255,255,255,0.6)'}} />
                </div>
                <div >
                  <CaretRightFilled onClick={this.clickBtnRight} style={{fontSize: '100px', color: 'rgba(255,255,255,0.6)'}} />
                </div>
              </div>
            
            </div>
          </div>
      </div>
    )
  }
}
