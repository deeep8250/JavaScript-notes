
fetch("https://api.github.com/users/hiteshchoudhary")
.then(function(user){
   return user.json()
}).then(function(user){
 document.querySelector('#name').innerHTML = user.name
 let img = document.querySelector('#image')  
  img.src = user. avatar_url
// console.log(user)
}).catch(function(error){
return console.log("Somethig went wrong")
})


