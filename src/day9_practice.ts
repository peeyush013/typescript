//var input1 =  document.querySelector('input')
//console.log(input1?.value)   // why not giving error when using question mark ?
// wconsole.log(input1.value)  // will give error as document.querryselector returns htmlinputelement only


// typecasting using as operator
var input3 =  document.querySelector('input') as HTMLInputElement
console.log(input3.value)


var input4 = document.querySelector('input')
var input5 = input4 as HTMLInputElement
input5.value

//EventTarget extends HTMLInputElement extends HTMLElement extends Element

var element1:Element;  // giving element type to a variable 

// downcasting
element1 = new HTMLInputElement(); // we can make object as htmlinputelement has parent elemet is element.
element1 = new HTMLElement();
//element1 = new EventTarget();  // we cant make object on EventTarget as EventTarget is itself parent class.

// typecasting using <> operator

var element2 = <HTMLInputElement> document.querySelector('input');
element2.value;


// type assertions

function costing (costPrice:number,labourPrice:number,feasiable:boolean):number|string{
	var finalCost = costPrice+labourPrice;
if (feasiable ){
return `${finalCost}$`;
}
else {
	return finalCost;
}
}
var cp1=costing(10,5,true) as string;
var cp2=costing(20,10,false) as number;
console.log(cp1);
console.log(cp2);
