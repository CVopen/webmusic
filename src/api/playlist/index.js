import request from '../../utils/request'

// 歌单分类
export function catlist (data) {
  return request({
    url: '/playlist/catlist',
    method: 'get',
    params: data
  })
}
// 歌单 ( 网友精选碟 )
export function playlist (data) {
  return request({
    url: '/top/playlist',
    method: 'get',
    params: data
  })
}