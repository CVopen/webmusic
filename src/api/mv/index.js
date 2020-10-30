import request from '../../utils/request'

// mv 地址
export function getUrl (data) {
  return request({
    url: '/mv/url',
    method: 'get',
    params: data
  })
}

// 相关视频推荐
export function simi (data) {
  return request({
    url: '/simi/mv',
    method: 'get',
    params: data
  })
}
// 获取 mv 数据
export function simiMV ( data ) {
  return request({
    url: '/mv/detail',
    method: 'get',
    params: data
  })
}
// 热门评论
export function hotComments (data)  {
  return request({
    url: '/comment/hot',
    method: 'get',
    params: data
  })
}