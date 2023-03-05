// type casting using as operator
var input = document.querySelector('input[type="text"]') as HTMLInputElement
console.log(input.value)

var input2 = document.querySelector('input[type="text"]')
var b2 = (input2 as HTMLInputElement).value


//HtmlInputElement  extends HTMLElement extents Element
var e1:Element;
// var e1:EventTarget;
e1 = new HTMLInputElement()

// <>
// program 2
var e2=  <HTMLInputElement>document.querySelector('input[type="text"]')
e2.value
// Type assertions 
function getCount(price:number,discount:number,format:boolean):number|string{
        var finalPrice=  (price - discount)
        if(format){
            return `$${finalPrice}`
        }
        else {
            return finalPrice
        }
}
var a11 = getCount(100,10,true) as String
var a12 = getCount(100,10,false) as number