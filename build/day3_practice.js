"use strict";
var languages;
(function (languages) {
    languages[languages["java"] = 0] = "java";
    languages[languages["javascript"] = 1] = "javascript";
    languages[languages["python"] = 2] = "python";
    languages[languages["html"] = 3] = "html";
    languages[languages["css"] = 4] = "css";
})(languages || (languages = {}));
// if(languages.java) {
// 	console.log('its a backend language')
// }                                       // will not give result because ts takes it as 0 position
if (languages.javascript) {
    console.log('its a frontend language');
}
// number enum
var week;
(function (week) {
    week[week["sunday"] = 0] = "sunday";
    week[week["monday"] = 1] = "monday";
    week[week["tuesday"] = 2] = "tuesday";
    week[week["wednesday"] = 3] = "wednesday";
    week[week["thursday"] = 4] = "thursday";
    week[week["friday"] = 5] = "friday";
    week[week["saturday"] = 6] = "saturday";
    // we can give number to values 
    // if we give only one value to first then it will take precedding numbers automatically
})(week || (week = {}));
console.log(week.sunday);
console.log(week.monday);
var week2;
(function (week2) {
    week2[week2["sunday"] = 0] = "sunday";
    week2[week2["monday"] = 1] = "monday";
    week2[week2["tuesday"] = 2] = "tuesday";
    week2[week2["wednesday"] = 3] = "wednesday";
    week2[week2["thursday"] = 4] = "thursday";
    week2[week2["friday"] = 5] = "friday";
    week2[week2["saturday"] = 6] = "saturday";
    // we can give number to values 
    // if we give only one value to first then it will take precedding numbers automatically
    // if we dont give any number it will start from 0
})(week2 || (week2 = {}));
console.log(week2.sunday); //0
console.log(week2.monday); //1
var week3;
(function (week3) {
    week3[week3["sunday"] = 10] = "sunday";
    week3[week3["monday"] = 11] = "monday";
    week3[week3["tuesday"] = 12] = "tuesday";
    week3[week3["wednesday"] = 13] = "wednesday";
    week3[week3["thursday"] = 14] = "thursday";
    week3[week3["friday"] = 15] = "friday";
    week3[week3["saturday"] = 16] = "saturday";
    // we can give number to values 
    // if we give only one value to first then it will take precedding numbers automatically
    // if we dont give any number it will start from 0
})(week3 || (week3 = {}));
console.log(week3.sunday);
console.log(week3.monday); // 11
// string enum
var planets;
(function (planets) {
    planets["first"] = "mercury";
    planets["second"] = "venus";
    planets["third"] = "earth";
    planets["fourth"] = "mars";
    planets["fifth"] = "jupiter";
    planets["sixth"] = "saturn";
    planets["seventh"] = "uranus";
    planets["eight"] = "neptune";
})(planets || (planets = {}));
console.log(planets.first);
var arts = {
    singer: 'rahul',
    dancer: 'rohit',
    writer: 'roshan'
};
var countries = {
    india: 'tcs',
    usa: 'accenture',
    japan: 'casio'
};
console.log(countries.usa);
var countries2 = {
    india: 'hcl',
    usa: 'microsoft',
    japan: 'olympus'
};
console.log(countries2.japan);
var countries3 = {
    india: 'delloite',
    usa: 'blackstone',
    japan: 'baker makenzie'
};
console.log(countries3.japan);
var countries4 = {
    india: 'kpmg',
    usa: 'grant thorton',
    japan: 'baker makenzie'
};
console.log(countries4.usa);
// union 
//union means or 
var x = 10;
x = 20; // we can update x as string or number 
x = 'twenty';
console.log(x);
// function add(code: string | number) {
//     console.log(`my address is ${code}`)
// }
function water(pacific) {
    console.log(`pacific is the deepest ${pacific}`);
    console.log(`there are ${pacific} oceans `);
}
water('ocean');
water(4);
function calculations(x, y) {
    //    console.log(x+y)
    //    console.log(x-y) // will show error as it confused coz number + string cant be added in ts
}
calculations(10, 20);
// functions 
// return type
function interestRate(x, y) {
    return x / y;
}
var i = interestRate(13, 100); // have to store value if we return something
console.log(i);
// void - not return anything
function interestRate1(x, y) {
    console.log(x / y);
}
interestRate1(11, 100);
