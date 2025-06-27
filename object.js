
// lets check whether function is object or not

function multiply(num){
    return num*5;
}

// as here we are accessing multiply function as an object
multiply.power = 2;     

console.log(multiply(40));
console.log(multiply.power);
console.log(multiply.prototype);

/* as prototype gives some internal property, so this function may also contain some internal property
    in this reference of this is stored
*/

/*
    As everything in js is referred as object, so here we can function as object
*/

function createUser(username, score){
    this.username = username
    this.score = score
}
// you can also create a function useing prototype

createUser.prototype.increment = function(){
    this.score++;
}
// now it doesn't have context wehere to operate, so we are using this to refer them from where it is called.

createUser.prototype.print = function(){
    console.log(`Price is : ${this.score}`);
}

// without using new keyword it throws error = TypeError: Cannot read properties of undefined (reading 'print')
// jab maine function se property transfer ki tof bataya nehi ki kaha se property aai hai, as new keyword batata hai

const coffee = new createUser("Coffee", 50)
const capachino = new createUser("Capachino", 400)

coffee.print()
capachino.print()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/