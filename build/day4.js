"use strict";
// program 1
class PersonV {
    constructor(msg) {
        this.greeting = msg;
    }
    greet() {
        return this.greeting;
    }
}
let pro = new PersonV("hello");
console.log(pro.greeting);
console.log(pro.greet());
// program 2
// private  and public
class PersonNN {
    constructor(name) {
        this.name = name;
    }
    getName() {
        this.getGreet();
        return this.name;
    }
    getGreet() {
        console.log('hello');
    }
}
let poorva = new PersonNN("poorva");
let a = poorva.getName();
console.log(a);
//poorva.name
// program 3
class PersonNNN {
    //private name:string;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let mayuri = new PersonNNN("peeyush");
console.log(mayuri.getName());
// program 4
class PersonNNNN {
    constructor(name) {
        this.name = name;
    }
    // public setName(neName: string): string {
    //     this.name = neName
    //     return this.name
    // }
    getName() {
        return this.name;
    }
}
let ankit = new PersonNNNN("ram");
