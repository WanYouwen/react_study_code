// interface Person {
//   firstName: string;
//   lastName: string;
// }

// function greeter(person: Person) {
//   return 'Hello, ' + person.firstName + ' ' + person.lastName;
// }

// let user = { firstName: 'Jane', lastName: 'User' };

// document.body.innerHTML = greeter(user);

class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
  middleInitial: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + person.middleInitial + person.lastName;
}

let someValue: any = 'this is a string';

let strLength: number = (someValue as string).length;
let user = new Student('Jane', 'Mwqwererw', 'User');

document.body.innerHTML = greeter(user);
console.log(strLength);
document.body.innerHTML = greeter(strLength);
