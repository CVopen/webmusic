/*
 * @Author: xyh 
 * @Date: 2020-09-20 18:20:05 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-09-20 22:49:35
 */

import states from './states'

const reducers = (state = states, action) => {
  if(action.type === 'change') {
    return {...state}
  }
  return state
}

export default reducers