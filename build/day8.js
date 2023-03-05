"use strict";
// interface person {
//     name: string
//     phoneNumber: number
// }
// //set of rule
// let mayuriA: person = {
//     name: "mayuri",
//     phoneNumber: 1234
// }
// interface BusinessPartner {
//     name: string
//     role: string
//     equity: number
// }
// interface Identity {
//     id: number,
//     name: string
// }
// interface Contact {
//     email: string
//     mobileNo: number
// }
//Problem-1
// type Employee = Identity & Contact
// type Customer = BusinessPartner & Contact
// let mayuriEmp: Employee = {
//     id: 123,
//     name: "MayuriKatwe",
//     email: "mayuri@gmail.com",
//     mobileNo: 54678999
// }
// let minskole:Customer={
//     name: "Mahesh",
//     role: "Marketing",
//     equity: 30,
//     email: "mahesh@yahoo.com",
//     mobileNo: 4267282929
// }
//Problem 2
// type EmployeeTwo = BusinessPartner & Identity & Contact
// let vaibhav: EmployeeTwo = {
//     name: "vaibhav",
//     role: "HR",
//     equity: 5,
//     id:567,
//     email: "vaibhav@gmail.com",
//     mobileNo: 5678900
// }
//Problem 3
// type alphaNumerical = string | number
// function addOne(p1: alphaNumerical, p2: alphaNumerical) {
//     if (typeof p1 === "number" && typeof p2 === "number") {
//         return p1 + p2
//     }
//     if (typeof p1 == "string" && typeof p2 === "string") {
//         return p1.concat(p2)
//     }
//     throw new Error("Invalid input")
// }
// //and => multiplication
// //t && t ==> t
// //t && f ===> f
// //f && t  ==> f
// //f && f ==> f
// console.log(addOne(2, 2))
// console.log(addOne('good', 'Night'))
// console.log(addOne(3,"33445"))
//problem 4
class CustomerA {
    isCreditAllow() {
        return true;
    }
}
class SuppierA {
    isShortList() {
        return true;
    }
}
//class ==> object
let haldiram = new CustomerA();
// haldiram.isCreditAllow()
let lays = new SuppierA();
// function signContract(partner: businessA) {
//     let message: string = ""
//     if (partner instanceof CustomerA) {
//         if (partner.isCreditAllow()) {
//             message = " sign contract with customer"
//         }
//     }
//     if (partner instanceof SuppierA) {
//         if (partner.isShortList()) {
//             message = "sign contract with suppier"
//         }
//     }
//     return message
// }
// console.log(signContract(haldiram))
// console.log(signContract(lays))
// 2 way
function signContract(partner) {
    let message = "";
    if ("isCreditAllow" in partner) {
        partner.isCreditAllow();
        message = "sign contract with customer";
    }
    if ("isShortList" in partner) {
        partner.isShortList();
        message = "sign contract with suppier";
    }
    return message;
}
console.log(signContract(haldiram));
console.log(signContract(lays));
