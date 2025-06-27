
// as here we want to create truelength


String.prototype.trueLength = function(){
    console.log(`${this}`); // undefined
    console.log(`${this.name}`); // 
    console.log(`True length is : ${this.trim().length}`);
}

// here we have created my own trueLength property

let myName = "Akshita   "
//console.log(myName.trueLength()); 

String.prototype.trueLength = function(){
    console.log(`${this}`); // undefined
    console.log(`True length is : ${this.trim().length}`);
}

// here we have created my own trueLength property

let anotherUserName = 'Coffee aur code    ';

anotherUserName.trueLength();

'Akshita  '.trueLength()
'IceCold'.trueLength()


let hero = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// i can create my own objects using prototype -> as we are adding this property to object

Object.prototype.Akshita = function(){
    console.log(`Akshita is present in all object`);
}

// property injected to array, but it will not work

/*Array.prototype.arrAkshita = function(){
    console.log(`Akshita's Array....`);
    
}
hero.arrAkshita()
heroPower.arrAkshita()
*/

heroPower.Akshita()
hero.Akshita()

// Inheritance

    // old version

const user = {
    name:"Coffee",
    email: "coffee@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: true
}

const TaSupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // from here we get access of TeachingSupport
}

Teacher.__proto__ = user


    // Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // it take access of techer