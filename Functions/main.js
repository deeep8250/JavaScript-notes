
// there are  many types of function are available in js for example Hoisted , not hoisted , annonymous , IIFE , callback , arrow functions  

 



// 1} Hoisted Function : Function which are can be used before its defined called hoisted function ... hoisted function always have name
const func = JustFunc()

function JustFunc (){
    console.log("hello world")
}




/* 2} Not Hoisted : Functions which are cant be called or being used before its defined
  no matter if you change the type of the var which is hold the function .... also not hoisted function can be anonymous or named */

const fu = ello()

const  ello = function F (){
    console.log("helllo from ello or not hoisted func")
}




/* 3} An arrow function is a shorter way to write a function in JavaScript. 
      benifits : this (keyword) from the outer context , short, clean code.
      in arrow function  you can return value in 2  types i) implicit
                                                          ii) explicit

 i) Explecit return : You use curly braces {} and manually write return.     
 Example .....                                                            
*/

 const One = (a,b) => {
   return a+b
  }
   console.log(One(1,2))



/*  i) Implicit return : You use curly braces () and for object return  and You skip the curly braces and don’t write return .     
 Example .....  
*/   

//For Object
const obj = () =>{name : "Deep"}
console.log(obj()) // this will print nothing because in object type return you have to use curly bracket for object only not for return also you've  to use () <- this  brackets outside like this......

const obj2 = () => ({name : "deep"}) 
console.log(obj2()) // it will successfully return the values

//for normal values return
const four = (a,b)=> ( a+b ) 
console.log(four(1,2))


   /// THIS keyword :  its used for current context and  arrow function dont have  this keyword
   
   const Deep = {
    name : "deep",
    village : "kanpur",
    police : "usthi",
    message :function (){
      return console.log(`${this.name} welcome to the program`)
    } 

   }


   Deep.message();





/*  IIFE functions  : Imediately invoked functions  always use selecolon(;) after IIFE */

(
  function name(name){
    console.log(`hello ${name} from IIFE`)
  }
)("deep");


