// What Is a Promise?
// A Promise represents a value that may be available now, in the future, or never. It's a way to handle asynchronous tasks, 

//using fetch with async and await

async function GetAllUsers(){



  try{
 // We can declare data and jsonData outside the try block without errors.
// But we put fetch() and data.json() inside try because both can throw errors:
// fetch() might fail due to network issues,
// and data.json() might fail if the response isn't valid JSON.
// Since both return promises, we use await with them — and if either fails,
// the error is automatically sent to the catch block.
    data = await fetch('https://jsonplaceholder.typicode.com/users')
    JsonData = await data.json()
    console.log(data)
    
  }catch(error){
console.log(error);

  }

}
GetAllUsers()