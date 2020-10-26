/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:54:16 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-25 21:21:12
 */

import React from 'react';
// import userApi from './api/userApi'
import { HashRouter as Router } from 'react-router-dom'
import RouterView from './router/index'
import config from './router/config'
import PageLoad from './components/PageLoad/PageLoad'
// 引入redux
import Audiocom from './components/Audiocom'
import store from './store'
import { Provider } from 'react-redux'
import './App.scss'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }
  setAnimation = () => {
    setTimeout(() => {
      this.setState({
        isShow: false
      })
      document.body.style.overflow = 'auto'
    }, 500);
  }
  componentDidMount () {
    this.setAnimation()
  }
  render () {
    return (
      <Provider store={store}>
        {/* {this.state.isShow ? (<PageLoad />) : null} */}
        <Router>
            <RouterView routes={config }/>
        </Router>
        <Audiocom/>
      </Provider>
    )
  }
}

export default App;
