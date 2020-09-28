/*
 * @Author: xyh 
 * @Date: 2020-09-28 16:10:50 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-28 20:22:18
 */
import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  render() {
    setTimeout(() => {
      // this.setState({
      //   isShow: false
      // })
      // document.body.style.overflow = 'auto'
      console.log(this.myRef.current);
    }, 3500);
    return (
      <div>
        <ul ref={this.myRef}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    )
  }
}
