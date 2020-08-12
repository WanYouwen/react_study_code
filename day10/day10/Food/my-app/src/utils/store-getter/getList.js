import actionCreators from 'store/home/actionCreators'

import { connect } from 'react-redux'

import { bindActionCreators} from 'redux'




const getList = (UIComponent) => {
  return connect(
    state => state.home,
    dispatch => {
      return bindActionCreators(actionCreators,dispatch)
    }
  )(UIComponent)
}



export default getList
