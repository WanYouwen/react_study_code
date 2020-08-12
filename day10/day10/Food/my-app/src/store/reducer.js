/* 
  统一的reducer
*/

import { combineReducers } from 'redux'


import home from './home/reducer'
import list from './list/reducer'


const reducer = combineReducers({
  home,
  list
})

export default reducer