
import React , {Component} from 'react'
import {
  CSSTransition
}from 'react-transition-group'

import 'styles/animate.css'

const WrpperAnimate = (Comp) => {
  return class extends Component{
    render(){
      let {pos} = this.props 
      return (
        <CSSTransition
           timeout={500}
           in = { pos  }
           classNames={{
            enter: 'animated',
            enterActive: pos ? 'fadeInLeft' : 'fadeInRight',
            exit: 'animated',
            exitActive: pos? 'fadeOutLeft' : 'fadeOutRight',
           }}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Comp></Comp>
        </CSSTransition>
      )
    }
  }
}




export default WrpperAnimate