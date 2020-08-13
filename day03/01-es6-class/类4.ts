/* 
  es7  class
    public  可以省略
    private
    protected 私有类成员 

    构造器 

      constrctor(
        定义实例属性（公有public、私有private）
      ){}

    存储器 getter   &  setter   定义和修改 实例成员
*/


class Person1 {
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
}

const person1 = new Person1()

person1.a 
person1.f
person1._a

person1._a = '__a' // 这边一旦给_a赋值了 就会触发set 的这个属性 进行值的修改





