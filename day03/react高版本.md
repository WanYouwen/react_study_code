1. react中  组件   即  类

  组件创建
    import React , {Component} from 'react'

    class Home extends Component {
      render(){
        return (
          <div className = "app-home-box">
            home
          </div>
        )
      }
    }

    export default Home


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


2. 2-3

  1. flux
  2. redux
  3. mobox  扩展


  vuex



  集中式存储管理
  多组件的  状态  共享

  flux  redux  mobox    和 MVC 一个级别 ， vuex只是 MVVM 架构思维的 一个工具而已



