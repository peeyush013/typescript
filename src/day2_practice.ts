// string 

var country:string = 'india'
console.log(country)

// country = 13   will not update as number already declared as string
country = 'hindustan'  // can update value as string
console.log(country)

// number
var phoneNumber:number = 9868586849
// phoneNumber='9987'  only update as number

phoneNumber= 9868586848
 console.log(phoneNumber)

// boolean
var isGod:boolean 
// isGod ='true'  cant update as boolean should be without strings
isGod = true

// function
function Gains(totalPurchase:number,totalSales:number):number{
    return totalSales-totalPurchase
}
let netGains=Gains(0.13,0.10)
console.log(netGains)

function netLoss(purchase:number,sales:number):void{
    console.log(purchase-sales)
}
netLoss(0.10,0.15)

// array

var oceans = ['indian','pacific','atlatic','arctic']
console.log(oceans)

var continents:string[]
continents = ['asisa','europe','africa','n.america','s.america','australia']
console.log(continents)

// continents = ['asisa','europe','africa','n.america','s.america','australia',100] will give error if we put anydatatype other tahn string 
// exception using array methods
// continents.push('antartica',100)
// continents.unshift(1)
console.log(continents)

continents.pop()
continents.shift()
console.log(continents)

// other way of defining datatype

var mangf: Array<string> = ['microsoft','amazon','netflix','google','facebook']

 mangf.forEach(function (el:string) {
	console.log(el.toUpperCase)   // it is smart auto picked the strings methods
	
 })

// tuple - array of fixed length
var lifeElements : [string,string,string,string,string]
lifeElements = ['air','water','fire','sky','land']
console.log(lifeElements)
// lifeElements = ['air','water','fire','sky','land,'x'] will give error as length is fixed

// exception
// if we use array methods to add or remove element we van do so
lifeElements.push('x')
console.log(lifeElements)


