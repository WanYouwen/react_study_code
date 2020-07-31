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
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + person.middleInitial + person.lastName;
}

let user = new Student('Jane', 'M.wqwererw', 'User');

document.body.innerHTML = greeter(user);
