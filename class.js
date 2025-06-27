// ES6


class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeNmae(){
        return `${this.username.toUpperCase()}`
    }
}

const coffee = new User('coffee', 'coffee@gmail.com', '34dgf6789')
console.log(coffee.encryptPassword());
console.log(coffee.changeNmae());

//      BEHIND THE SCENE

function behindUser(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
behindUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
behindUser.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User('tea_chai', 'tea@gmail.com', '34dgf6789')
console.log(tea.encryptPassword());
console.log(tea.changeNmae());
