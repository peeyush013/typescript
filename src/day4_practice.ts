// oops 
// constructor

class Result {
	
	studentName = 'vikramBatra'   // we can give hardcode values 
	x:number  // we have to define the datatype of variables taken in constructor
	x12:number
  constructor(x:number,x12:number){ 
	this.x=x
	this.x12=x12
	
  }

 displayBothResults():number{
	return (this.x,this.x12)
  }

}
var classResults = new Result(98,85)
console.log(classResults)
console.log(classResults.studentName)
console.log(classResults.x,classResults.x12)
console.log(classResults.displayBothResults())


// private  and public variable

class Result2{
	
 private studentName = 'vikram Batra'   // private variable has access in class only
	 x:number  // we have to define the datatype of variables taken in constructor
	private x12:number
  constructor(x:number,x12:number){ 
	this.x=x
	this.x12=x12
	
  }

 public displayBothResults():number{
	this.displayName()
	return (this.x + this.x12) // we can use private variable in a function 

  }
  private displayName() {
	console.log ('Vikram Batra')
  }
}
var classResults2 = new Result2(98,85)
console.log(classResults2)

// console.log(classResults2.x,classResults.x12)  will give error as it is private variable can called outside class
console.log(classResults2.displayBothResults())	
	


class Result3 {
	public constructor( public firstName:string ,  private lastName:string) { // we can use private and publuc in constructor parameter

	}
	public displayName ():string{
		return this.firstName + this.lastName
	}
}
let rk = new Result3 ('rahul','kumar')
var fullName=rk.displayName()
console.log(fullName)

// readonly
class Result4{
readonly anuj:string
bhushan:string
	constructor(a:string,b:string){
		this.anuj =a
		this.bhushan=b

	}
public displayFull(newN:string):string{
//  this.anuj = newN  wil not update as anuj is readonly 
this.bhushan = newN  // will update as bhushan is not readonly
 return this.bhushan
}
// public setName(neName: string): string {
// 	this.name = neName
// 	return this.name
// }

}

let ab = new Result4('anuj','bhushan')
console.log(ab.displayFull('bhushanNew'))

