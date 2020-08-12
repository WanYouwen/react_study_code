
/* 
  reducer  纯函数   修改数据
*/

import state from './state'
import * as type from './type'

const reducer = (previousState = state,action) => {
  let new_state = {...previousState}


  switch(action.type){
    case "x": 

    break;

    default: 
    break;
  }


  return new_state
}


export default reducer