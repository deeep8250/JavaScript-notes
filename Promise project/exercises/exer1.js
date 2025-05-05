

///how to create own promises

const promise1 = new Promise(function(resolve , rejecet){
    if (true){
        console.log('hi there');
        resolve({name : 'deep' , age : 23})
    }else{
        console.log('bie there');
        rejecet()
    }
}) 

promise1.then((user)=>{
    console.log('resolved')
    console.log(user.name)

}).catch(()=>{
    console.log('rejected')
})