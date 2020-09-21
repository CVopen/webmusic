/*
 * @Author: xyh 
 * @Date: 2020-09-19 21:53:15 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-21 11:19:05
 */

import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
class RouterView extends React.Component {
  // constructor (props) {
  //   super(props)
  // }
  isChildren = (child) => {
    console.log('child');
    return child.children.map((item,index) => {
      return <Route 
        key={index} 
        exact path={item.path} 
        component={item.component} 
        />
    })
  }
  
  render () {
    return (
      <Switch>
        { this.props.routes.map((item, index) => {
            if(item.children) {
              console.log(item)
              return (
                <Route
                  key={index}
                  path={item.path}
                  exact
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
                  <Route key={index} exact path="/">
                    <Redirect to={item.redirect}/>
                  </Route>
                )
            } else if (item.path === '*') {
              return <Route exact key={index} path="*"><item.component/></Route>
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