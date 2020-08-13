/* 
  es7  class
    public  可以省略
    private 私有实例成员
    protected 私有实例成员 ,但是如果想在子类中使用这个实例成员 ， 那么将private 可以 改成 protected

    构造器 

      constrctor(
        定义实例属性（公有public、私有private）
      ){}

    es6 存储器 getter   &  setter   定义和修改 实例成员
*/


class Person2 {
  public a = 0
  private b //私有实例属性
  static c = 3

  constructor(
    public f = 'f',
    private g = 'g'
  ){
    this.a = 1
    this.b = 2
  }


  /* 存储器 getter & setter */

    get _a(){
      return '_a'
    }
    private get _b(){
      return '_a'
    }

    set _a( val ){
      this._a = val
    }

  private  d(){
    console.log('实例的方法')
  }
  
  static e (){
    console.log( '类的方法' )
  }


  protected z = 'z'
}



class People2 extends Person2 {
  constructor(){
    super()
    this.z 
    this._a
    this.a 
    this. f
  }
}


const person2 = new Person2()

// person2.z  z是私有实例属性

People2.c 
People2.e


