/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:53:15 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-28 15:50:32
 */

import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
class RouterView extends React.Component {
  
  render () {
    return (
      <Switch>
        { this.props.routes.map((item, index) => {
            if(item.children) {
              return (
                <Route
                  key={index}
                  path={item.path}
                  render={propsrouter => (
                    <item.component {...propsrouter} routes={item.children } />
                  )}
                />
              )
            } else if(!item.redirect && item.path !== '*'){
              return <Route 
                        key={index} 
                        exact 
                        path={item.path} 
                        component={item.component} 
                      />
            } else if (item.redirect) {
              return (
                  <Route exact key={index} path={item.path}>
                    <Redirect to={item.redirect}/>
                  </Route>
                )
            } else if (item.path === '*') {
              return <Route key={index} path="*"><item.component/></Route>
            } else {
              return <></>
            }
          })
        }
      </Switch>
    )
   
  }
}
export default RouterView