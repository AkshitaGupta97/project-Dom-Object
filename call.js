
function setUsername(username){
    // complex DB call
    this.username = username
    console.log('called via call method');
    
}

function createUser(username, email, password){
   // setUsername(username) // ye actually call nehi ho raha hai bss refernce pass hua hai

    setUsername.call(this, username) // .call reference hold karta hai, this is important to because it will hold value of setusername which is executed
    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', '123')
console.log(chai);
