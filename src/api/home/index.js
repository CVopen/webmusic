/*
 * @Author: xyh 
 * @Date: 2020-09-30 22:53:44 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-25 14:32:37
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
// 热门歌单
export function homePlaylistHot (data) {
  return request({
    url: '/playlist/hot',
    method: 'get',
    params: data
  })
}
// 推荐电台
// export function homeDjprogram (data) {
//   return request({
//     url: '/personalized/djprogram',
//     method: 'get',
//     params: data
//   })
// }

// 所有榜单
export function topList (data) {
  return request({
    url: '/toplist',
    method: 'get',
    params: data
  })
}
// 排行榜详情 传入排行榜id
export function topDetail (data) {
  return request({
    url: '/top/list',
    method: 'get',
    params: data
  })
}

// 数字专辑-新碟上架
export function albumList (data) {
  return request({
    url: '/album/list',
    method: 'get',
    params: data
  })
}
// 获取专辑内容
export function getAlbumMusic (data) {
  return request({
    url: '/album',
    method: 'get',
    params: data
  })
}
// 获取歌单详情
export function getPlayDetail (data) {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params: data
  })
}

// 音乐是否可用
export function checkMusic (data) {
  return request({
    url: '/check/music',
    method: 'get',
    params: data
  })
}
// 获取音乐url
export function getSongUrl (data) {
  return request({
    url: '/song/url',
    method: 'get',
    params: data
  })
}