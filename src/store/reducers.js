/*
 * @Author: xyh 
 * @Date: 2020-09-20 18:20:05 
 * @Last Modified by: xyh
 * @Last Modified time: 2020-10-29 22:50:16
 */

import states from './states'

const reducers = (state = states, action) => {
  console.log(state);
  if(action.type === 'set_userinfo') {
    return {
      userInfo: action.value
    }
  }
  return state
}

export default reducers