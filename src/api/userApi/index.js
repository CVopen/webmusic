/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:53:49 
 * @Last Modified by:   xyh 
 * @Last Modified time: 2020-09-19 21:53:49 
 */

import request from '../../utils/request'

const userApi = {
  // 手机登录
  cellphone: (data) => {
    return request({
      url: '/login/cellphone',
      method: 'post',
      data
    })
  },
  // 邮箱登录
  emailLogin: (data) => {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  }
}


// 刷新登录

// 发送验证码

// 验证验证码

// 注册（修改密码）

// 检测手机号码是否已注册

export default userApi