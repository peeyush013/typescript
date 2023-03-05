"use strict";
// // // program 1
// // class GrandFathera {
// //     firstName: string = "manohar"
// //     lastName: string = "deshpande"
// //     displayName(): void {
// //         console.log(this.firstName + this.lastName)
// //     }
// // }
// // class FatherA extends GrandFathera {
// //     fFirstName: string = "shirish"
// //     displayFatherName() {
// //         console.log(this.fFirstName + this.lastName)
// //     }
// // }
// // class SonSS extends FatherA {
// //     sSName: string = "chinmay"
// //     displaySonName(): void {
// //         console.log(this.sSName + this.lastName)
// //     }
// // }
// // let chinmayaa  = new SonSS()
// // //properties 
// // chinmayaa.fFirstName
// // chinmayaa.lastName
// // chinmayaa.firstName
// // chinmayaa.sSName
// // // methods
// // chinmayaa.displayName()
// // chinmayaa.displaySonName()
// // chinmayaa.displayFatherName()
// // program 
// class GrandFatherA {
//     firstName: string;
//     lastName: string;
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayName(): void {
//         console.log(this.firstName + this.lastName)
//     }
// }
// class FatherAB extends GrandFatherA {
//     fFirstName: string;
//     constructor(firstName: string, lastName: string, fFirstName: string) {
//         super(firstName, lastName)
//         this.fFirstName = fFirstName
//     }
//     displayNameFather(): void {
//         console.log(this.fFirstName + this.lastName)
//         super.displayName()
//     }
// }
// class SonAB extends FatherAB {
//     sFirstName: string;
//     constructor(firstName: string, lastName: string, fFirstName: string, sFirstName: string) {
//         super(firstName, lastName, fFirstName)
//         this.sFirstName = sFirstName
//     }
//     displayNameSon(): void {
//         console.log(this.sFirstName + this.lastName)
//         super.displayNameFather()
//     }
// }
// let rama  = new SonAB("manohar","deshpande","shirish","chinmay")
// rama.displayNameSon()
// //A ---> B ---- C  ===> C object reference A & B
// // Father  (parent) =====> sonA (child)  daughter(child)
// class FatherV {
//     firstName:string;
//     lastName:string;
//     constructor(firstName:string , lastName:string){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayFatherName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class SonV extends FatherV {
//     sfirstName:string;
//     constructor(firstName:string , lastName:string,sfirstName:string){
//         super(firstName,lastName)
//         this.sfirstName = sfirstName
//     }
//     displaySonName(){
//         console.log(this.sfirstName + this.lastName)
//     }
// }
// class DaughterV extends FatherV {
//     dfirstName:string;
//     constructor(firstName:string , lastName:string,dfirstName:string){
//         super(firstName,lastName)
//         this.dfirstName = dfirstName
//     }
//     displaySonName(){
//         console.log(this.dfirstName + this.lastName)
//     }
// }
// let chinmayA = new SonV("shirish","deshpande","chinmay")
// let  gauri = new DaughterV("shirish","deshpande","gauri")
