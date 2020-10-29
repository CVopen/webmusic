/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:53:49 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-29 14:18:11
 */

import request from '../../utils/request'


  // 手机登录
export function cellphone (data) {
    return request({
      url: '/login/cellphone',
      method: 'post',
      data
    })
  }
  // 邮箱登录
export function emailLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
  // 登陆状态
export function status (data) {
  return request({
    url: '/login/status',
    method: 'get',
    data
  })
}

// 刷新登录

// 发送验证码

// 验证验证码

// 注册（修改密码）

// 检测手机号码是否已注册

// export default userApi