/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:55:18 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-22 11:57:10
 */

import React, { Component } from 'react'
import {Link,Switch,Route,HashRouter as Router} from 'react-router-dom'

class Home extends Component {
  render() {
    const child = this.props.routes
    return (
      <Router>
        我是父组件<br/>
        <Link to="/" >go index</Link><br/>
        <Link to="/home" >go home</Link><br/>
        <Link to="/home/child" >嵌套路由1</Link><br/>
        <Link to="/home/no" >嵌套路由2</Link>
        {/* <Child/> */}
        <Switch>
         { child.map((item, index) => (
          <Route
            path={item.path}
            key={index}
            exact
            render={props => (
              <item.component {...props} routes={item.routes} />
            )}
          />
         ))}
        </Switch>
      </Router>
    )
  }
}
export default Home