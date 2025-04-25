const button = document.querySelector('#button')
const currentPage = window.location.pathname
let timeValue = false;


if(currentPage.includes('index.html')){
button.addEventListener('mouseover', ()=>{

   button.style.backgroundColor = '#4FBE23';
   button.style.transform = 'scale(1.1)';
   button.style.boxShadow = '10px 10px 60px rgb(179, 255, 0)';

})

button.addEventListener('mouseout', ()=>{

    button.style.backgroundColor = 'green';
    button.style.transform = 'scale(1)';
    button.style.boxShadow = 'none'

 })

}

 ///for second page
 if (currentPage.includes('page2.html')) {
  let ic= 0;
  const fourOptions = [
    ['dog', 'cat', 'human', 'alien'],
    ['yes', 'no', 'maybe', 'idk'],
    ['India', 'USA', 'Mars', 'Narnia']
  ];

  const mainQuestionOption = ['who are you ?', 'are you ok ?', 'where are you from ?'];
  const OutDiv = document.querySelector('#outer');
  let InnerDv = document.querySelector('#inner');
  let index = 0;

  const Questions = document.querySelector('#question');
  showQuestion(index);
  timer();

  const interval = setInterval(() => {
    index++;
    if (index < mainQuestionOption.length) {
      showQuestion(index);
       timer()
    } else {
      Questions.innerHTML = `<h1>Thanks for participating</h1>`;
    document.querySelector('#parentOptions').innerHTML = ''
    const button = document.getElementById('buttons');
     button.remove()
    

    
    clearInterval(interval);
    }



  }, 10000);
  



  function showQuestion(i) {
    Questions.innerHTML = `<h1>${mainQuestionOption[i]}</h1>`;



  
   const options = document.querySelectorAll('.options')
   let optionIndex2 = 0
   options.forEach(option=>{
    const input = option.querySelector('.tick')
    option.innerHTML = ''
    option.appendChild(input)
    option.append(`${fourOptions[i][optionIndex2]}`)
    optionIndex2++
    
    })


    document.querySelectorAll('input[name="option"]').forEach((radio) => {
      radio.checked = false;
    });

    let selectedAnswers = []; 

    document.querySelectorAll('input[name="option"]').forEach((radio) => {
      radio.addEventListener('change', () => {
        const selectedValue = document.querySelector('input[name="option"]:checked').nextSibling.textContent.trim();
        console.log("Selected:", selectedValue);
    
     
        selectedAnswers[index] = selectedValue;
      });
    });
    




 }

    

  }//show quesiton 

function timer(){

   const InnerDv = document.querySelector('#inner')
   let  DestinationWidth = 0;

   const interValTimer = setInterval(() => {
    
      DestinationWidth +=10

      InnerDv.style.width = DestinationWidth + '%'

     
      console.log(InnerDv.offsetWidth)
    if(InnerDv.offsetWidth == 200){
        clearInterval(interValTimer)
    }

   }, 1000);




}













