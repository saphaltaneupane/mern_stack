// document.getElementById('selector').innerHTML=" we are inside the external file";
function clickme(){
    document.getElementById('selector').innerHTML='Hello JavaScript';

}
 const collection= document.getElementsByClassName("example");
//  collection[0].innerHTML="hi";
// for single it takes class as array
for(let i=0;i<collection.length;i++){
    collection[i].innerHTML="suma";
}
//Variable
//Constant
let greeting='Hello World';
document.getElementById('selector').innerHTML=greeting;
console.log(greeting);
greeting="JavaScript";
document.getElementById('selector').innerHTML=greeting;

// Two ways to make a variable
let firstMonth='camel';
let first_month="snakecase";
var secondMonth='Feburary';
function a(){
    // let a="Jello"
    var a="Jello";
}
console.log(a);
a();
// let =local block scoped  no hoisting  
//var =global scope Hoisting = host the flag top ma logdinxa