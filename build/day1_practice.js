"use strict";
let num = 100; // we have to give datatype to each variable
// num = 'ten'  // will give error
num = 101; // we can only update value as number 
console.log(num);
let codeLanguage = 'typescript';
codeLanguage = 'we have to give datatype in typescript'; // we can update only string if we give string value at first to variable
let lie = true;
// lie = 'x'  will not update string only can update boolean value
lie = false;
console.log(lie);
let truth;
// truth = 10   will give error since we provided boolean datatype
truth = true;
console.log(truth);
function addition(x, y) {
    return x + y;
}
let f1 = addition(2, 3);
console.log(f1);
console.log(addition(3, 4));
console.log(addition(4, 4));
// addition('10','20')   will give error only take number datatype
var jobRoles;
(function (jobRoles) {
    jobRoles[jobRoles["hr"] = 0] = "hr";
    jobRoles[jobRoles["supervision"] = 1] = "supervision";
    jobRoles[jobRoles["sr_supervisor"] = 2] = "sr_supervisor";
    jobRoles[jobRoles["customer"] = 3] = "customer";
    jobRoles[jobRoles["client"] = 4] = "client";
    jobRoles[jobRoles["manager"] = 5] = "manager";
    jobRoles[jobRoles["sr_manager"] = 6] = "sr_manager";
})(jobRoles || (jobRoles = {}));
if (jobRoles) {
    console.log('hr makes rangoli');
}
var departements;
(function (departements) {
    departements[departements["hr"] = 0] = "hr";
    departements[departements["supervision"] = 1] = "supervision";
    departements[departements["sr_supervisor"] = 2] = "sr_supervisor";
    departements[departements["customer"] = 3] = "customer";
    departements[departements["client"] = 4] = "client";
    departements[departements["manager"] = 5] = "manager";
    departements[departements["sr_manager"] = 6] = "sr_manager";
})(departements || (departements = {}));
if (departements.client) {
    console.log('clients should be handled immediately ');
}
// let mobilePhone = {
// modelName : 'oneplusNord',
// ram:12,
// rom:256
// }
let mobilePhone = {
    modelName: 'oneplusNord',
    ram: 12,
    rom: 256
};
console.log(mobilePhone);
let laptops;
laptops = { modelName: "dellInspiron", ram: 8, rom: "1tb" };
console.log(laptops);
