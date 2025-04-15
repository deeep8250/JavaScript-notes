
//An object is like a box that holds information in the form of key-value pairs.

  const Obj = {
    F_name  : "",
    L_name : "",
    Mob : Number
  }

   Obj.F_name = "deep";

  console.log(Obj.F_name) 


  /* JS is run at runtime not compile time { compile time : check the code before executing or run ,  runtime : check the code while running } for example in go you can mention a
   struct without actual value but only  its types because its run  at compile  time and  in Javascript you cant do that if you try to give type of value and key  in object (struct in go )
   instead of just type  string that you mention as a type of value of that key its stored inside the key so thens tring not a type anymore its become value of that key  for  example 
  */
  const Obj1 = {
    F_name  : String,
  }

  console.log(Obj1.F_name) 





  // object de-structure
  const Obj2 = {
    F_name  : "",
    L_name : "mondal",
    Mob : Number
  }

  const {L_name : secondName} = Obj2

    console.log(secondName)

    
     /* Destructuring is like taking out values directly from the object into variables. its nothing but a way to reduce the writing time while accessing a object's value and that object
    is a nested object so every time  if you wanna access any partucular value inside that oj you yave to give multiple dot and names like : user.details.name.F_name , and after
    using the destructurization you can make your code more readablity and clean */




  
