const input = document.querySelector('form');
input.addEventListener('submit' , function(Q){
  Q.preventDefault()
  const name =  document.querySelector("#name").value
  const city =  document.querySelector("#city").value
  const email =  document.querySelector("#email").value
  const result = document.querySelector("#result")



  


     if (!name){
      document.querySelector("#nameOutput").innerHTML =`Name : Please fill the name field`
      document.querySelector('#name').style.border = '2px solid red'
      result.innerHTML = '<h2>Status : please fill  the name </h2>'

    }else{
      document.querySelector('#name').style.border = '2px solid black'
      document.querySelector("#nameOutput").innerHTML =`Name :  ${name} `

    }
     if (!city){
      document.querySelector('#city').style.border = '2px solid red'
      document.querySelector("#cityOutput").innerHTML =`City : Please fill the city field`
      result.innerHTML = '<h2>Status : please fill  the city </h2>'

     }else{
      document.querySelector('#city').style.border = '2px solid black'
      document.querySelector("#cityOutput").innerHTML =`City :  ${city} `

     }
     if (!email){
      document.querySelector('#email').style.border = '2px solid red'
      document.querySelector("#emailOutput").innerHTML =`Email : Please fill the email field`
      result.innerHTML = '<h2>Status : please fill  the email </h2>'

     }else{
      document.querySelector('#email').style.border = '2px solid black'
      document.querySelector("#emailOutput").innerHTML =`Email :  ${email} `

     }



     if(!name || !city || !email){

      result.innerHTML = '<h2>Status : invalid</h2>'

     }else{
      result.innerHTML = '<h2>Status : OK</h2>'

     }

    





})

//Question what the Q.preventdefault() do ?

/*

 preventDefault() means:
“Stop the browser from doing what it normally does.”

In a form:
When you click the Submit button, the browser normally reloads the page or sends the form data somewhere.

But if you use preventDefault(), it stops that from happening — so you can do things like:

1. Check if all fields are filled
2. Show a message without reloading the page
3. Display the form data on the same screen



*/
