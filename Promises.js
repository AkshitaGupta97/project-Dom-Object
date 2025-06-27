
/*const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls
    // setTimeOut

    setTimeout(function(){
        console.log('Promise 1 resolved');
        resolve()
    },3000)
})
promiseOne.then(function(){
    console.log('Promise 1 resolved with then'); 
})

// or you can do

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('New way to resolve with single part');
        resolve()
    },5000)
}).then(function(){
    console.log('Promise resolved with single part');   
})
*/

/*
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName:'Coffee', email:'coffee@gmail.com'})
    },3000)
})
promiseTwo.then(function(user){
    console.log(user);
    
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        //let error = true
        let error = false
        if(!error){
            resolve({userName:'Akshita', password:'456'})
        }
        else {
            reject('Error occurred !!!')
        }
    },3000)
})

promiseThree.then((user) =>{
    console.log(user);
    return user.userName  
}).then((username) => {
    console.log(username);
}).catch(function(err){
    console.log(err);
    
}).finally(() => {
    console.log("Finally will occur when promise is either resolved or rejected.");
    
})
*/

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        //let error = true
        let error = false
        if(!error){
            resolve({userName:'JavaScript', password:'456'})
        }
        else {
            reject('Error occurred: JS went wrong!!!')
        }
    },2000)
})

// either you can use .then(), .catch() method or try{}, catch{}

async function ConsumePromiseFour() {
    try{
        const response = await promiseFour
        console.log(response);
    }
    catch(error){
        console.log(error);       
    }
    
}
ConsumePromiseFour();

// fetch is object which return a promise

async function getAPI() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("Error:", error);
    }
}
//getAPI()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json // we are returning so we again use .then
}).then((data) => {
    console.log(data);
    
})
.catch((err) =>{
    console.log('Error occurred.', err);
})
