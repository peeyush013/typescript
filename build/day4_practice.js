"use strict";
// oops 
// constructor
class Result {
    constructor(x, x12) {
        this.studentName = 'vikramBatra'; // we can give hardcode values 
        this.x = x;
        this.x12 = x12;
    }
    displayBothResults() {
        return (this.x, this.x12);
    }
}
var classResults = new Result(98, 85);
console.log(classResults);
console.log(classResults.studentName);
console.log(classResults.x, classResults.x12);
console.log(classResults.displayBothResults());
// private  and public variable
class Result2 {
    constructor(x, x12) {
        this.studentName = 'vikram Batra'; // private variable has access in class only
        this.x = x;
        this.x12 = x12;
    }
    displayBothResults() {
        this.displayName();
        return (this.x + this.x12); // we can use private variable in a function 
    }
    displayName() {
        console.log('Vikram Batra');
    }
}
var classResults2 = new Result2(98, 85);
console.log(classResults2);
// console.log(classResults2.x,classResults.x12)  will give error as it is private variable can called outside class
console.log(classResults2.displayBothResults());
class Result3 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName() {
        return this.firstName + this.lastName;
    }
}
let rk = new Result3('rahul', 'kumar');
var fullName = rk.displayName();
console.log(fullName);
// readonly
class Result4 {
    constructor(a, b) {
        this.anuj = a;
        this.bhushan = b;
    }
    displayFull(newN) {
        //  this.anuj = newN  wil not update as anuj is readonly 
        this.bhushan = newN; // will update as bhushan is not readonly
        return this.bhushan;
    }
}
let ab = new Result4('anuj', 'bhushan');
console.log(ab.displayFull('bhushanNew'));
