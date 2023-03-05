// program2
// interface Worldbank{
//     save():number
//     loan():number
// }

// class SBIa implements Worldbank {
//     loan():number{
//         return 10
//     }
//     save():number{
//         return 20
//     }
//     branchName():string{
//         return "Kharadi pune"
//     }
// }

// let kharadi = new SBIa(); 
// kharadi.loan()
// kharadi.save()
// kharadi.branchName()

// program 2

// interface Student {
//     info():string
// }

// interface Teacher {
//     salary():number
// }

// class PersonX implements Student,Teacher {
//     info(): string {
//         return "Maths Science Physics"
//     }
//     salary(): number {
//         return 10
//     }

// }

// class PersonY implements Teacher{
//     salary(): number {
//         return 10
//     }
// }


// let hemant  = new PersonX()
// hemant.info()
// hemant.salary()

// let emdo = new PersonY()
// emdo.salary()


// // program 3
// // extends 

// interface WorldbankB {
//     getCode():number
// }

// class RBI implements WorldbankB{
//     getCode():number{
//         return 1000
//     }
// }

// class PNBa extends RBI{

//     loan():number{
//         return 10
//     }

//     save():number{
//         return 20
//     }
// }

// let nagpur = new PNBa()
// nagpur.getCode()
// nagpur.loan()
// nagpur.save()

// program 4
interface WorldbankB {
    getCode():number
}

class RBI implements WorldbankB{
    getCode():number{
        return 1000
    }
}

class PNBa extends RBI{

    loan():number{
        return 10
    }

    save():number{
        return 20
    }
    // same method name , same signature , differnt class
    getCode():number{
        super.getCode()
        return 2000
    }

}

let nagpur = new PNBa()
console.log(nagpur.getCode())  // 2000
nagpur.loan()
nagpur.save()

// no object from abstract class
// can create object of abstract class

abstract class RBIIndia {
    abstract loan():number
    abstract save():number

    country():string{
        return "India"
    }
}








