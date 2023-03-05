"use strict";
// program2
// interface Worldbank{
//     save():number
//     loan():number
// }
class RBI {
    getCode() {
        return 1000;
    }
}
class PNBa extends RBI {
    loan() {
        return 10;
    }
    save() {
        return 20;
    }
    // same method name , same signature , differnt class
    getCode() {
        super.getCode();
        return 2000;
    }
}
let nagpur = new PNBa();
console.log(nagpur.getCode()); // 2000
nagpur.loan();
nagpur.save();
// no object from abstract class
// can create object of abstract class
class RBIIndia {
    country() {
        return "India";
    }
}
