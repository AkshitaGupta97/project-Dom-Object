
class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME  is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username, email, password){
        //this.username = username
        super(username)     // super will automatically call to user and set value 
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const cat = new Teacher('cat', 'cat@gmail.com', '234')
cat.addCourse()

const wolf = new Teacher('wolf')
wolf.addCourse()
wolf.logMe()

console.log(cat === wolf);
console.log(cat instanceof Teacher);

