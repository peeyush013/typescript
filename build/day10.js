"use strict";
// let j = [11,22,33,44,55]
// function add(a,b){
//     console.log(a) //11
//     console.log(b) // 12
// }
// add(...j)
// //[a,b,c,d] =====> a , b   // spread operator
// // a,b,c,d  =====> [a,b,c,d] // rest operator
// function addAll(...q1){
//     console.log(q1)
//     return q1.reduce(function(acc,val){
//         return acc + val
//     },acc)
// }
// let a1 = addAll(2,3,4,45,2,4,4,5,65,6,7,44,4,5,6,7)
// let aa = [11,22,33,44,55]
// let bb = [22,33,44,55,66]
// let q1 = [...aa,...bb]
// //[11,22,33,44,55,22,33,44,55,66]
// let aaa = {
//     firstName:"chinmay"
// }
// let bbb = {
//     lastName:"deshpande"
// }
// let q = {...aaa,...bbb}
///////////////////////// Javascript code ////////////////////////////////
// Generics
//     0          1        2      3       4
// ["chinmay","shirish","ravi","ramesh","ram"]
//
// function getRandomElement(items:any[]):any {
//     let randomIndex = Math.floor(Math.random()*items.length)
//     return items[randomIndex]
// }
// let numbers = [33,44,55,66,77,88,899,90]
// let colors = ["green","red","black","blue"]
// console.log(getRandomElement(numbers));
// console.log(getRandomElement(colors));
// program 1
function getRandomElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numbers = [33, 44, 55, 66, 77, 88, 899, 90];
let colors = ["green", "red", "black", "blue"];
console.log(getRandomElement(numbers));
console.log(getRandomElement(colors));
let a1 = [11, 22, 33];
let b1 = [44, 55, 66];
let r1 = [...a1, ...b1];
// program 2
let a2 = [10, 20, 30];
function displayOne(a, b, c) {
    console.log(a, b, c);
}
displayOne(...a2);
// program 3
function addObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let result = addObjects({ firstName: "chinmay" }, { lastName: "deshpande" });
console.log(result);
console.log(result.firstName, result.lastName);
