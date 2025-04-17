const buttons = document.querySelectorAll('.buttons')
 const body  = document.body


 buttons.forEach(function(b){
    b.addEventListener('click' , function(e){

         console.log(e.target)
         if(e.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
         }
         if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
         }

         if(e.target.id === 'green'){
            body.style.backgroundColor = 'green'
         }

         if(e.target.id === 'red'){
            body.style.backgroundColor = 'red'
         }
        
    })
 })
