/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:53:01 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-20 22:20:11
 */

import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 60000
})

// request拦截
request.interceptors.request.use((config)=>{
  
})
// response拦截
request.interceptors.response.use(config=>{
  
})
export default request
