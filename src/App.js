/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:54:16 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-21 00:45:44
 */

import React from 'react';
// import userApi from './api/userApi'
import { HashRouter as Router } from 'react-router-dom'
import RouterView from './router/index'
import config from './router/config'
import PageLoad from './components/PageLoad'
// 引入redux
import store from './store'
import { Provider } from 'react-redux'
import './App.scss'
class App extends React.Component {

  render () {
    return (
      <Provider store={store}>
        {/* <PageLoad /> */}
        <Router>
            <RouterView routes={config }/>
        </Router>
      </Provider>
    )
  }
}

export default App;
