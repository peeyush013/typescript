"use strict";
// type casting using as operator
var input = document.querySelector('input[type="text"]');
console.log(input.value);
var input2 = document.querySelector('input[type="text"]');
var b2 = input2.value;
//HtmlInputElement  extends HTMLElement extents Element
var e1;
// var e1:EventTarget;
e1 = new HTMLInputElement();
// <>
// program 2
var e2 = document.querySelector('input[type="text"]');
e2.value;
// Type assertions 
function getCount(price, discount, format) {
    var finalPrice = (price - discount);
    if (format) {
        return `$${finalPrice}`;
    }
    else {
        return finalPrice;
    }
}
var a11 = getCount(100, 10, true);
var a12 = getCount(100, 10, false);
