"use strict";
// using interface in class by using implements
// we need to give head of the methods given in interface
// body have to be given in class
class XYZltd {
    minDirectors() {
        return 1;
    }
    minFounders() {
        return 1;
    }
    constructor(comapanyType, registrationOffice) {
        this.registrationOffice = registrationOffice;
        this.companyType = comapanyType;
    }
}
var xyzltd = new XYZltd('newDelhi', 'private');
console.log(xyzltd.companyType);
console.log(xyzltd.registrationOffice);
var d = xyzltd.minDirectors();
console.log(d);
var f = xyzltd.minFounders();
console.log(f);
class Abcltd {
    minFounders() {
        return 1;
    }
    minDirectors() {
        return 4;
    }
    partyNames() {
        console.log("a,b,c");
    }
    contractDate() {
        return '1-jan-2023';
    }
    constructor(commission, registrationOffice, totalParties) {
        this.totalParties = totalParties;
        this.registrationOffice = registrationOffice;
        this.commission = commission;
    }
}
var t = new Abcltd(12, 'banglore', 2);
console.log(t.commission);
console.log(t.registrationOffice);
console.log(t.totalParties);
console.log(t.contractDate());
console.log(t.minDirectors());
console.log(t.minFounders());
t.partyNames();
// class Exams {
//     //age:number
//     // constructor(ag:number){
//     //     this.age = ag
//     // }
//     constructor(private stuAge: number) {  // we cant  use variable outside the cass as its private variable declsred
// 	}
// }
// let bholu = new Exams(12)
// bholu.
/// we can declare varibale in constructor without using this dot
class sucess {
    constructor(knowledge, hardWork, consistency) {
        this.knowledge = knowledge;
        this.hardWork = hardWork;
        this.consistency = consistency;
    }
}
let promotion = new sucess("pyhton,javascript", "four hours", "regularly");
console.log(promotion.consistency);
console.log(promotion.hardWork);
console.log(promotion.knowledge);
// abstract class
// we can only declare in abstract but canot define normal methods , but we can define abstract methods
// we can not create object for abstract class
class TaxDepartement {
    country() {
        return "India";
    }
}
// let directTaxs = new TaxDepartement
// directTaxs.                         // can not create instance/object
