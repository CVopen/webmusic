import request from '../../utils/request'

// 歌单分类
export function homeBanner (data) {
  return request({
    url: '/playlist/catlist',
    method: 'get',
    params: data
  })
}