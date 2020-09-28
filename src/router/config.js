/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:50:43 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-28 15:59:31
 */
// 首页路由
import Home from '../views/Home/index'
import Discover from '../views/Home/Discover/index'
import Album from '../views/Home/Album/index'
import Artist from '../views/Home/Artist/index'
import Djradio from '../views/Home/Djradio/index'
import Playlist from '../views/Home/Playlist/index'
import Toplist from '../views/Home/Toplist/index'
// 404页面
import Nofound from '../views/Nofound/index'
const routes = [ 
  // {
  //   path: '/index',
  //   component: Index
  // },
  {
    path: '/index',
    component: Home,
    children: [
      {
        path: '/index/discover',
        component: Discover
      },
      {
        path: '/index/album',
        component: Album
      },
      {
        path: '/index/artist',
        component: Artist
      },
      {
        path: '/index/djradio',
        component: Djradio
      },
      {
        path: '/index/playlist',
        component: Playlist
      },
      {
        path: '/index/toplist',
        component: Toplist
      },
      {
        path: '/index',
        redirect: '/index/discover'
      }
    ]
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '*',
    component: Nofound
  }
]
export default routes