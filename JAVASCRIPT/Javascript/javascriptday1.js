// document.getElementById('header').innerHTML='Hello me';
// document.querySelector('#header').innerHTML='hello mee';
//  it contains interpreter


//Variables
// which values can be changed , which holds some value
  let name='Javascript';

 
  //to refrence the value later on
  // document.getElementById('header').innerHTML=greeting;
  // The HTML header (<h1 id="header">) 
  // shows "Javascript" because the innerHTML 
  // was only set once before greeting was 
  // updated. Since there is no additional line 
  // updating header.innerHTML after greeting 
  // changes, the content of the header remains 
  // the same.
  // To make it show "helloworld," 
  // update the innerHTML again after changing 
  // greeting:
  // let greeting = 'Javascript';
  // document.getElementById('header').innerHTML = greeting;
  
  // console.log(greeting);
  
  // greeting = 'helloworld';
  // document.getElementById('header').innerHTML = greeting; // Update header again
  
  // console.log(greeting);


  // let a=2;
  
  // var b=3;
  // var b =4;

  
//Constant

const greeting='Javascript';
document.getElementById('header').innerHTML=greeting;

console.log(greeting);
// should be in camelcase

//Data Type
//Primitive
// Number 
let a=1;
let b=1.1;

//String
let c= "saphalta";
b="saphalta";
//Boolean
b= true || false; 

//Bigint
b=1222222222222222333333333222222;
//Undefined not defined
b= undefined;
//Null no value
b=null;
//Symbol
 


//Composite
// Object
let newobject ={greeting: "Hello World",
  // key:value;
  times:1
};
console.log(newobject.greeting+newobject.times);

//Array is also an object
 let y=[1,2, "Hello world"];
 console.log(y[0]);

  



