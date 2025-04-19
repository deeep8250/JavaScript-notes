const  array  = ['red','blue','green','white','grey','yellow','black']

const  button = document.querySelector('#button')

let isbuttonTrue = false;
let intervalValue;

button.addEventListener('click',function(){
isbuttonTrue = !isbuttonTrue

    if (isbuttonTrue){
    button.innerHTML='press to stop'

    console.log(isbuttonTrue)



 let index = 0;
  intervalValue = setInterval(() => {
    if (index >= array.length){
    index = 0
   }

    document.body.style.backgroundColor = array[index]
    index++

  

  }, 2000);


}else{

    button.innerHTML='press to start'
    console.log(isbuttonTrue)
    clearInterval(intervalValue)

}


})