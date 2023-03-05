enum languages {
	java,
	javascript,
	python,
	html,
	css
}
// if(languages.java) {
// 	console.log('its a backend language')
// }                                       // will not give result because ts takes it as 0 position
 if (languages.javascript){
	console.log('its a frontend language')
 }


 // number enum

 enum week {
	sunday = 0,   // enum have coma seperated values
	monday =1 ,
	tuesday =2,
	wednesday =3,
	thursday =4,
	friday =5,
	saturday =6
// we can give number to values 
// if we give only one value to first then it will take precedding numbers automatically
 }

 console.log(week.sunday)
 console.log(week.monday)



 enum week2 {
	sunday ,   // enum have coma seperated values
	monday  ,
	tuesday ,
	wednesday ,
	thursday ,
	friday ,
	saturday 
// we can give number to values 
// if we give only one value to first then it will take precedding numbers automatically
// if we dont give any number it will start from 0
 }
 console.log(week2.sunday)   //0
 console.log(week2.monday)   //1

 enum week3 {
	sunday = 10,   // enum have coma seperated values
	monday  ,
	tuesday ,
	wednesday ,
	thursday ,
	friday ,
	saturday 
// we can give number to values 
// if we give only one value to first then it will take precedding numbers automatically
// if we dont give any number it will start from 0
 }
 console.log(week3.sunday)
 console.log(week3.monday)   // 11


// string enum

enum planets {
	first = "mercury" ,
	second = "venus",
	third = "earth",
	fourth = "mars",
	fifth = "jupiter",
	sixth = "saturn",
	seventh = "uranus",
	eight = "neptune"
}
console.log(planets.first)


var arts:{singer:string,dancer:string,writer:string}
= {
	singer:'rahul',
	dancer : 'rohit',
	writer:'roshan'
}

// we can make our own datatype in ts by using type keyword

type  techCompanies = {
	india  :string,
	usa :string,
	japan : string
}

var countries:techCompanies = {
	india : 'tcs',
	usa : 'accenture',
	japan :'casio'}

console.log(countries.usa)

var countries2:techCompanies = {
	india : 'hcl',
	usa : 'microsoft',
	japan :'olympus'
}
console.log(countries2.japan)


// we commanly use interface more than the type interface have more advantages
// interface is similar as type 

interface accountsCompanies  {
	india : string,
	usa : string,
	japan :string

} 

var countries3 :accountsCompanies={
    india : 'delloite',
	usa : 'blackstone',
	japan : 'baker makenzie'

}
console.log(countries3.japan)

var countries4 :accountsCompanies={
    india : 'kpmg',
	usa : 'grant thorton',
	japan : 'baker makenzie'

}
console.log(countries4.usa)


// union 
//union means or 

var x:string|number = 10
x = 20 // we can update x as string or number 
x = 'twenty'
console.log(x)

// function add(code: string | number) {
//     console.log(`my address is ${code}`)
// }

function water (pacific:string|number):void {
	console.log (`pacific is the deepest ${pacific}`)
	console.log (`there are ${pacific} oceans `)
}
water ('ocean')
water(4)


function calculations (x:number|string,y:number|string):void {
//    console.log(x+y)
//    console.log(x-y) // will show error as it confused coz number + string cant be added in ts
}
calculations(10,20)


// functions 
// return type

function interestRate(x:number ,y:number):number|string {
	return x/y
}
var i = interestRate(13,100)  // have to store value if we return something
console.log(i)

// void - not return anything

function interestRate1(x:number,y:number):void{
	console.log(x/y)
}
interestRate1(11,100)
















