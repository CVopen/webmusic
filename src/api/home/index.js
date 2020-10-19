/*
 * @Author: xyh 
 * @Date: 2020-09-30 22:53:44 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-20 00:06:20
 */
import request from '../../utils/request'

// 主页swiper轮播
export function homeBanner (data) {
  return request({
    url: '/banner',
    method: 'get',
    params: data
  })
}
// 推荐歌单
export function homePersonalized (data) {
  return request({
    url: '/personalized',
    method: 'get',
    params: data
  })
}