// interface are mandatory rules or abstraction 
interface CompaniesAct {
	minFounders():Number
	minDirectors():Number
	registrationOffice:String

}
// using interface in class by using implements
// we need to give head of the methods given in interface
// body have to be given in class


class XYZltd implements CompaniesAct{
minDirectors(): Number {
	return 1
}
minFounders(): Number {
	return 1
}
registrationOffice:String
companyType:String
constructor(comapanyType:String ,registrationOffice:String){
	this.registrationOffice=registrationOffice
	this.companyType = comapanyType
}

}

var xyzltd = new XYZltd ('newDelhi','private')
console.log(xyzltd.companyType)
console.log(xyzltd.registrationOffice)
var d= xyzltd.minDirectors()
console.log(d)

var f = xyzltd.minFounders()
console.log(f)

// two or more interface in one class

interface ContractAct {
	partyNames() :void
	totalParties:Number
	contractDate():String

}

class Abcltd implements ContractAct,CompaniesAct {
	minFounders():Number{
		return 1
	}
	minDirectors():Number{
		return 4
	}
    registrationOffice:String

	partyNames() :void{
		console.log( "a,b,c")
	}
	totalParties:Number
	contractDate():String{
		return '1-jan-2023'
	}
	commission:Number

	constructor(commission:Number,registrationOffice:String,totalParties:Number){
		this.totalParties=totalParties
		this.registrationOffice=registrationOffice
		this.commission=commission
	}
}
var t = new Abcltd(12,'banglore',2)
console.log(t.commission)
console.log(t.registrationOffice)
console.log(t.totalParties)
console.log(t.contractDate())
console.log(t.minDirectors())
console.log(t.minFounders())
t.partyNames()


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
	constructor (public knowledge:String, public hardWork:String , public consistency:String){

	}
}
let promotion = new sucess("pyhton,javascript","four hours","regularly")
console.log(promotion.consistency)
console.log(promotion.hardWork)
console.log(promotion.knowledge)


// abstract class
// we can only declare in abstract but canot define normal methods , but we can define abstract methods
// we can not create object for abstract class

abstract class TaxDepartement {
    abstract gstRate():number
	
    abstract exciseRate():number

    country():string{
        return "India"
    }
}

// let directTaxs = new TaxDepartement
// directTaxs.                         // can not create instance/object


