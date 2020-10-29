/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:53:01 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-29 23:34:11
 */

import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 60000
})

// request拦截
request.interceptors.request.use((config)=>{
  // const token = window.localStorage.getItem('token')
  const cookie = window.localStorage.getItem('cookie')
  // if(token) {
  //   config.headers.token = token
  // }
  if(config.method === 'get') {
    // console.log(config.headers);
    if(config.params) {
      config.params = Object.assign(config.params,{cookie})

    } else {
      config.params = {cookie}
    }
  }
  if(config.method === 'post') {
    if(config.body) {
      config.body = Object.assign(config.body,{cookie})

    } else {
      config.body = {cookie}
    }
  }
  return config
})
// response拦截
request.interceptors.response.use(config=>{
  return config
})
export default request
