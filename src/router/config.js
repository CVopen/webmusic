/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:50:43 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-24 23:48:23
 */
import Home from '../views/Home/index'
import Child from '../views/Child'
import Nofound from '../views/Nofound/index'
import Index from '../views/Home/index'
const routes = [ 
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
  }
]
export default routes