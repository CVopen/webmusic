/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:50:43 
 * @Last Modified by: zmx
 * @Last Modified time: 2020-09-27 14:42:13
 */
import Home from '../views/Home/index'
import Child from '../views/Child'
import Nofound from '../views/Nofound/index'
import Index from '../views/Home/index'
import Login from '../views/Login/index'
import EmailLoginPar from '../views/EmailLogin/index'
const routes = [ 
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
    component: Index
  },
 
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/child',
        component: Child
      },
      {
        path: '/home/no',
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