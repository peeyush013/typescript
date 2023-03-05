// // program 1

class RelianceLtd {
    group: string = "relianceGroup"
	startedFrom:number = 1973
    headOfficeLocation: string = "mumbai"
    displayInfo(): void {
        console.log(this.group +" commenced business from "+ this.startedFrom)
    }

}
class JioInfoLtd extends RelianceLtd {
	companyName:String ='Jio'
    startedBusinessFrom:Number = 2007
    displayInfo1() {
        console.log(this.companyName + " commenced business from " + this.startedBusinessFrom + " from "+this.headOfficeLocation)
    }
}

class Lyf extends JioInfoLtd {
    companyNamee: string = "Lyf Mobile Phones"
    displayInfo2(): void {
        console.log(this.companyNamee + +" started business from "+this.startedBusinessFrom + " from " +this.headOfficeLocation)
    }
}

let subsidary  = new Lyf()

//properties 
console.log(subsidary.companyName)
console.log(subsidary.companyNamee)
console.log(subsidary.group)
console.log(subsidary.headOfficeLocation)
console.log(subsidary.startedBusinessFrom)

// methods
subsidary.displayInfo()
subsidary.displayInfo1()
subsidary.displayInfo2()

// program 

class GrandFather {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    displayName(): void {
        console.log(this.firstName + this.lastName)
    }
}
class Father extends GrandFather {
    fatherFirstName: string;
    constructor(firstName: string, lastName: string, fatherFirstName: string) {
        super(firstName, lastName)
        this.fatherFirstName = fatherFirstName
    }
    displayNameFather(): void {
        console.log(this.fatherFirstName + this.lastName)
        super.displayName()
    }

}

class Son extends Father {
    sonFirstName: string;
    constructor(firstName: string, lastName: string, fatherFirstName: string, sonFirstName: string) {
        super(firstName, lastName, fatherFirstName)
        this.sonFirstName = sonFirstName
    }
    displayNameSon(): void {
        console.log(this.sonFirstName + this.lastName)
        super.displayNameFather()
    }

}

let anuj  = new Son("Nand","Sharma","Nathu","Anuj")
anuj.displayNameSon()


// father ,son, daughter 

class Father1 {
    firstName:string;
    lastName:string;
    constructor(firstName:string , lastName:string){
        this.firstName = firstName
        this.lastName = lastName
    }

    displayFatherName(){
        console.log(this.firstName + this.lastName)
    }
}

class Son1 extends Father1 {
    sonfirstName:string;
    constructor(firstName:string , lastName:string,sonfirstName:string){
        super(firstName,lastName)
        this.sonfirstName = sonfirstName
    }

    displaySonName(){
        console.log(this.sonfirstName + this.lastName)
    }
}

class Son2 extends Father1 {
    son2firstName:string;
    constructor(firstName:string , lastName:string,son2firstName:string){
        super(firstName,lastName)
        this.son2firstName = son2firstName
    }

    displaySon2Name(){
        console.log(this.son2firstName + this.lastName)
    }
}

let peeyush = new Son1("NR","sharma","peeyush")
let anuje = new Son2("NR","sharma","anuj")