
import * as type from './type'

const actionCreators = {
  getHot(){
    /* 
      异步请求
    */
   return dispatch => {
     fetch('/data/homeHot.json')
      .then( res => res.json())
      .then( result => {
        let action = {
          type: type.GET_HOME_HOT,
          payload: result.data.category['热门'].slice(0,11)
        }
        dispatch( action )
      })
      .catch( error => console.log( error))
   }
  },
  getDelicacy(){
    /* 
      异步请求
    */
   return dispatch => {
     fetch('/data/delicacy.json')
      .then( res => res.json())
      .then( result => {
        console.log( result )
        let action = {
          type: type.GET_HOME_DELICACY,
          payload: result.data
        }
        dispatch( action )
      })
      .catch( error => console.log( error))
   }
  }
}


export default actionCreators