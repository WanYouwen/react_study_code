// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return 'Hello, ' + person.firstName + ' ' + person.lastName;
// }
// let user = { firstName: 'Jane', lastName: 'User' };
// document.body.innerHTML = greeter(user);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + person.middleInitial + person.lastName;
}
var someValue = 'this is a string';
var strLength = someValue.length;
var user = new Student('Jane', 'Mwqwererw', 'User');
document.body.innerHTML = greeter(user);
console.log(strLength);
// document.body.innerHTML = greeter(strLength);
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix([[1, 5]]));
for (var i = 0; i < 10; i++) {
    // setTimeout(function () {
    console.log(i);
    // }, 100 * i);
}
