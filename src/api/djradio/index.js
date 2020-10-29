import request from '../../utils/request'

// 电台 - 分类
export function catelist (data) {
  return request({
    url: '/dj/catelist',
    method: 'get',
    params: data
  })
}
// 推荐节目
export function recommendList (data) {
  return request({
    url: '/program/recommend',
    method: 'get',
    params: data
  })
}
// 电台-节目榜
export function toplist (data) {
  return request({
    url: '/dj/program/toplist',
    method: 'get',
    params: data
  })
}
// 电台 - 分类推荐
export function typeList (data) {
  return request({
    url: '/dj/recommend/type',
    method: 'get',
    params: data
  })
}
// 电台 - 类别热门电台
export function hotList (data) {
  return request({
    url: '/dj/radio/hot',
    method: 'get',
    params: data
  })
}