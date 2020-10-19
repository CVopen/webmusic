/*
 * @Author: xyh 
 * @Date: 2020-09-26 14:55:49 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-20 00:16:19
 */

import React, { Component } from 'react'
import Headers from '../../components/Header/index'
import { Switch } from 'react-router-dom'
import RouterView from '../../router/index'
import style from  './index.module.scss'
export default class index extends Component {
  render() {
    return (
      <div>
        <Headers {...this.props} />
        <div className={style.content}>
          <Switch>
            <RouterView routes={ this.props.routes }/>
          </Switch>
          {/* <Switch>
            {
              this.props.routes.map((item, i) => {
                if (!item.redirect) {
                  return (
                    <Route
                      path={item.path}
                      key={i}
                      render={props => (
                        // pass the sub-routes down to keep nesting
                        <item.component {...props} routes={item.children} />
                      )}
                    />
                  )
                } else {
                  return (
                    <Route exact key={i} path={item.path}>
                      <Redirect to={item.redirect}/>
                    </Route>
                  )
                }
              })
            }
          </Switch> */}
        </div>
      </div>
    )
  }
}
