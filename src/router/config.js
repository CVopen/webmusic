/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:50:43 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-28 17:38:06
 * @Last Modified by: zmx
 * @Last Modified time: 2020-09-27 14:42:13
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-08 01:07:24
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
// 登录注册
import Login from '../views/Login/index'
import EmailLoginPar from '../views/EmailLogin/index'


const routes = [ 
  // {
  //   path: '/index',
  //   component: Index
  // },
  {
    path: '/login',
    component: Login
  },
  {
    path:'/emailLogin',
    component:EmailLoginPar,
  },
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
      },
      {
        path: '*',
        component: Nofound
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
  },
]
export default routes