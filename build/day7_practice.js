"use strict";
// // program 1
class RelianceLtd {
    constructor() {
        this.group = "relianceGroup";
        this.startedFrom = 1973;
        this.headOfficeLocation = "mumbai";
    }
    displayInfo() {
        console.log(this.group + " commenced business from " + this.startedFrom);
    }
}
class JioInfoLtd extends RelianceLtd {
    constructor() {
        super(...arguments);
        this.companyName = 'Jio';
        this.startedBusinessFrom = 2007;
    }
    displayInfo1() {
        console.log(this.companyName + " commenced business from " + this.startedBusinessFrom + " from " + this.headOfficeLocation);
    }
}
class Lyf extends JioInfoLtd {
    constructor() {
        super(...arguments);
        this.companyNamee = "Lyf Mobile Phones";
    }
    displayInfo2() {
        console.log(this.companyNamee + +" started business from " + this.startedBusinessFrom + " from " + this.headOfficeLocation);
    }
}
let subsidary = new Lyf();
//properties 
console.log(subsidary.companyName);
console.log(subsidary.companyNamee);
console.log(subsidary.group);
console.log(subsidary.headOfficeLocation);
console.log(subsidary.startedBusinessFrom);
// methods
subsidary.displayInfo();
subsidary.displayInfo1();
subsidary.displayInfo2();
// program 
class GrandFather {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayName() {
        console.log(this.firstName + this.lastName);
    }
}
class Father extends GrandFather {
    constructor(firstName, lastName, fatherFirstName) {
        super(firstName, lastName);
        this.fatherFirstName = fatherFirstName;
    }
    displayNameFather() {
        console.log(this.fatherFirstName + this.lastName);
        super.displayName();
    }
}
class Son extends Father {
    constructor(firstName, lastName, fatherFirstName, sonFirstName) {
        super(firstName, lastName, fatherFirstName);
        this.sonFirstName = sonFirstName;
    }
    displayNameSon() {
        console.log(this.sonFirstName + this.lastName);
        super.displayNameFather();
    }
}
let anuj = new Son("Nand", "Sharma", "Nathu", "Anuj");
anuj.displayNameSon();
// father ,son, daughter 
class Father1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFatherName() {
        console.log(this.firstName + this.lastName);
    }
}
class Son1 extends Father1 {
    constructor(firstName, lastName, sonfirstName) {
        super(firstName, lastName);
        this.sonfirstName = sonfirstName;
    }
    displaySonName() {
        console.log(this.sonfirstName + this.lastName);
    }
}
class Son2 extends Father1 {
    constructor(firstName, lastName, son2firstName) {
        super(firstName, lastName);
        this.son2firstName = son2firstName;
    }
    displaySon2Name() {
        console.log(this.son2firstName + this.lastName);
    }
}
let peeyush = new Son1("NR", "sharma", "peeyush");
let anuje = new Son2("NR", "sharma", "anuj");
