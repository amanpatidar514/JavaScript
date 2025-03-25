class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const aman = new User("aman")
// console.log(aman.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const golu = new Teacher("golu", "i@phone.com")
console.log(golu.createId());