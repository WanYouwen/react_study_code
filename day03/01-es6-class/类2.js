/* 
  es6  class

*/

// class ClassName {}     

class Person {
  // 实例属性  a = 1  b
    a = 0
    b
  //类属性 || 静态属性  static
    static c = 3

  constructor(number){
    /* 构造器函数
      1. 可以接收参数
      2. 可以进行初始化实例属性 --》 给实例属性赋值||修改值  this.b = value this.a = 2
    */
    this.a = 1
    this.b = number

  }

  //实例方法  
  d(){
    console.log('实例的方法')
  }
  
  //类方法 || 静态方法 static
  static e (){
    console.log( '类的方法' )
  }
}

  /* 
    实例成员
      实例属性  +  实例方法

    类成员
      类属性  +  类方法
  */


const  person = new Person(2)  //实例


// 类的成员使用类访问
  Person.c 
  Person.e

// 实例的成员使用实例来访问
  person.a 
  person.b 
  person.d 