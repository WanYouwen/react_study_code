import React , {Component} from 'react'
import PropTypes from 'prop-types'
/* 
  props 
    1. 外部传入   √
    2. 内部设置
      低版本： getDefaultProps
      高版本： 定义的是类（静态）属性  放在 类定义的外来书写
        Home.defaultProps = {
          attr: value
        }

        getDefaultProps 这个生命周期钩子 去掉了

  state
        低版本： 1. getInitialState 

        高版本： constructor(){
          super()
          this.state = {}
        }


  修改状态
      问题： this丢失
      解决： 
        1. 箭头函数   fn = () => {}                  √  没有传参
        2. bind      { this.fn.bind(this,arg1,arg2)}          √  有传参时 ， 第一个参数一定写this
        3. 闭包      (function(obj){})(this)
        4. 通过      <button className="btn" onClick = { (e) => this.eventHandler(e) }>

  event对象传参问题： 

        1. 使用箭头函数
          eventHandler(e){
            console.log( e )
            console.log( this )
          }

          <button className="btn" onClick = { (e) => this.eventHandler(e) }>
                  事件对象
          </button>

        2. 使用bind 隐式传e  e作为形参的最后一个传入

          this.change.bind(this,100)


          change(n,e){

          }


    属性验证： 
          yarn  add prop-types

          import PropsTypes from 'prop-types'

          Home.propTypes = {
            propName: PropsTypes.string
          }

*/

class Home extends Component {
  // getDefaultProps(){
  //   return {
  //     msg: 'hello es6 react.js'
  //   }
  // }

  // getInitialState(){
  //   return {
  //     flag: true
  //   }
  // }

  

  constructor(props){
    // console.log( props ) 当前组件身上的属性
    super(props)
    this.state = {
      age: 20
    }
    this.change.bind(this)
  }

  change(n,e){
    console.log( e )
    this.setState({
      age: n
    })
  }

  // change =  (b) => {
  //   this.setState({
  //     age: b
  //   })
  // }

 

  // (function(obj){})(this)


  eventHandler(a,n){
    console.log( a )
    console.log( n )
    console.log( this )
  }

  render(){
    return (
      <div className = "app-home-box">
        home 
        <hr></hr>
        <button className="btn" onClick = { this.change.bind(this,2) }>
                点击修改
        </button>
        <button className="btn" onClick = { (e) => this.eventHandler(e,10) }>
                事件对象1
        </button>
        <button className="btn" onClick = { this.change.bind(this,100) }>
                事件对象2 - bind
        </button>
        {  this.props.msg  } ---- ----{this.state.age}
      </div>
    )
  }

}

Home.defaultProps = {
  msg: string =  'hello es6 react.js'
}

// Home.propTypes = {
//   msg: PropTypes.string
// }
export default Home