let num:number = 100 // we have to give datatype to each variable
// num = 'ten'  // will give error
num = 101  // we can only update value as number 
console.log(num)

let codeLanguage = 'typescript'
codeLanguage = 'we have to give datatype in typescript'  // we can update only string if we give string value at first to variable

let lie = true 
// lie = 'x'  will not update string only can update boolean value
lie = false
console.log(lie)

let truth:boolean
// truth = 10   will give error since we provided boolean datatype
truth = true
console.log(truth)


function addition1 (x:number,y:number):number{
    return x+y
}
let f1 = addition1(2,3)
console.log(f1)
console.log(addition1(3,4))
console.log(addition1(4,4))
// addition('10','20')   will give error only take number datatype




enum jobRoles  {
    hr,
    supervision,
    sr_supervisor,
    customer,
    client,
    manager,
    sr_manager
}

if(jobRoles) {
    console.log('hr makes rangoli')   
}




enum departements  {
    hr,
    supervision,
    sr_supervisor,
    customer,
    client,
    manager,
    sr_manager
}

if(departements.client) {
    console.log('clients should be handled immediately ')   
}


// let mobilePhone = {
	// modelName : 'oneplusNord',
	// ram:12,
	// rom:256

// }

let mobilePhone : {modelName: string, ram :number , rom:number} =
{
	modelName : 'oneplusNord',
	ram:12,
	rom:256
}
console.log(mobilePhone)


let laptops : {modelName:string , ram:number , rom:string}
laptops = {modelName:"dellInspiron" , ram:8 , rom:"1tb"}
console.log(laptops)
