class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const aman = new Teacher("aman", "aman@teacher.com", "123")

aman.logMe()
const golu = new User("golu")

golu.logMe()

console.log(aman instanceof User);