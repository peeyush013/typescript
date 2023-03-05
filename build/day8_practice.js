"use strict";
let mukul = {
    // but all properties from any interface should be given from other interfaces we can give any  property
    firstName: 'mukul',
    lastName: "kathuria",
    //age:25 ,
    dob: "30-9-1997"
};
let naina = {
    firstName: "naina",
    lastName: "rawat",
    age: 28,
    dob: '26-jan-1995',
    phone: 98989898,
    email: "n@gmail.com"
};
// if numbers then add , if strings than conact and other then give error
function emailId(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return (a.concat(b));
    }
    if (typeof a === "number" && typeof b === "number") {
        return (a + b);
    }
    throw new Error("please provide correct input");
}
console.log(emailId(1, 2));
console.log(emailId("anuj", "sharma"));
//console.log(emailId(1,"anuj"))
class Eggs {
    havingProteinA() {
        return true;
    }
}
class Grains {
    havingProteinB() {
        return true;
    }
}
let hen = new Eggs();
let soya = new Grains();
// function healthRequirements (a:nutrition){
//    let calories = "" 
//    if (a instanceof Eggs){
// 	if (a.havingProteinA()){
// 		calories="900kacl"
// 	}
//    }
//    if (a instanceof Grains){
// 	if (a.havingProteinB()){
// 		calories = "500kacl"
// 	}
//    }
//    return calories
// }
function healthRequirements(a) {
    let calories = "";
    if ("havingProteinA" in a) {
        calories = "900kacl";
    }
    if ("havingProteinB" in a) {
        calories = "500kacl";
    }
    return calories;
}
console.log(healthRequirements(soya));
console.log(healthRequirements(hen));
