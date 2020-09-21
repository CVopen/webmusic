/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:55:18 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-21 10:27:36
 */

import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    const Child = this.props.routes[0].component
    return (
      <div>
        我是父组件<br/>
        <Link to="/" >go index</Link><br/>
        <Link to="/home" >go home</Link><br/>
        <Link to="/home/child" >嵌套路由1</Link><br/>
        <Link to="/home/no" >嵌套路由2</Link>
        <Child/>
      </div>
    )
  }
}
export default Home