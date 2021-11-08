const express = require('express')
const app = express()

const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//###########  Lexical Environment
// function hello(){
//   var a="hello world";
// }

//###########  Name/Value Pair  & object (collection of name/value pair)
// Address{
//   Country:"Nepal",
//   City:"kathmandu",
//   Apartment:{
//     floor:3,
//   }
// }

//###########  Hoisting 
// b()
// console.log(a);    //this is called hoisting
// var a="Hello";
// function b(){
//   console.log("called b !");
// }

//###########  undefined (only means i have never set the value)
// var a; //only checks weather it takes memory or not
// console.log(a);
// if(a===undefined){   //undefined doesnot mean empty or doesnot exit
//   console.log("a is undefined !");
// }else{
//   console.log("a is defined !");
// }

//###########  invocation (call/run the function)   1st b() invoke then a()
// function a(){  b(); var c;}
// function b(){  var d;}
// a();   //1st function a() called that invoke b() function
// var d;


// function b(){  var myVar; console.log(myVar);}  //3rd myVar=undefined
// function a(){  var myVar=2; console.log(myVar);  b();} //2nd myVar=2
// var myVar=1; console.log(myVar);  //1st myVar=1
// a();
// console.log(myVar); //4th myVar=1

//###########  scope means(where i can access the variable) & chain means(link of Outer Enviroment reference)
// function b(){ console.log(myVar);}
// function a(){  var myVar=2; b();} 
// var myVar=1;  //o/p: myVar=1
// a();



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})