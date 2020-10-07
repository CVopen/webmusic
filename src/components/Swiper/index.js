/*
 * @Author: xyh 
 * @Date: 2020-09-28 16:10:50 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-07 18:57:57
 */
import React, { Component } from 'react'
import './index.scss'
import {homeBanner} from '../../api/home/index'
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
export default class index extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      count: 0,
      list: [],
      height: '',
      width: ''
    }
    this.count = 0
    this.timer = ''
  }

  swiperAnimetion = () => {
     this.timer = setInterval(() => {
      this.count++
      if (this.count >= this.state.list.length) {
        this.count = 0
      }
      this.setState({
        count: this.count
      })
      
    }, 3500)
  }
  handleClick = (e) => {
    console.log(e.target.dataset);
    // this.props.history.push('')
  }
  clickCircle = (e) => {
    this.count = e.target.dataset.id - 0
    this.setState({
      count: e.target.dataset.id - 0
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
    })
    clearInterval(this.timer)
    this.swiperAnimetion()
  }
  getBannerData = async () => {
    const { data } = await homeBanner()
    console.log(data.banners);
    let img = new Image()
    img.src = data.banners[0].imageUrl
    this.setState({
      list: data.banners,
      height: 1200 * img.height / img.width,
      width: data.banners.length * 40
    })
    
    this.swiperAnimetion()
  }
  componentDidMount () {
    this.getBannerData()
  }
  render() {
    return (
      <div className="swiper" style={{height: this.state.height}}>
        <ul ref={this.myRef} className="banner" style={{height: this.state.height}}>
          {
            this.state.list.map((item,index) => (
              <li 
                key={index}
                style={{opacity: this.state.count === index?1:0, zIndex: this.state.count === index?1:0, height: this.state.height}}
              >
                <img 
                  src={item.imageUrl} 
                  onClick={this.handleClick} 
                  alt=""
                  data-id={item.encodeId}
                />
              </li>
            ))
          }
        </ul>
        <ul className="circle" style={{width: this.state.width}}>
          {
            this.state.list.map((item, index) => (
              <li key={index} >
                <span data-id={index} onClick={this.clickCircle}className={this.state.count === index ? 'checkCircle': ''}></span>
              </li>
            ))
          }
        </ul>
        <div className="btn">
          <div >
            <CaretLeftFilled onClick={this.clickBtnLeft} style={{fontSize: '100px', color: 'rgba(255,255,255,0.6)'}} />
          </div>
          <div >
            <CaretRightFilled onClick={this.clickBtnRight} style={{fontSize: '100px', color: 'rgba(255,255,255,0.6)'}} />
          </div>
        </div>
      </div>
    )
  }
}
