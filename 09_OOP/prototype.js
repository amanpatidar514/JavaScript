// let myName = "aman     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aman = function(){
    console.log(`aman is present in all objects`);
}

Array.prototype.heyaman = function(){
    console.log(`aman says hello`);
}

// heroPower.aman()
// myHeros.aman()
// myHeros.heyaman()
// heroPower.heyaman()

// inheritance

const User = {
    name: "aman",
    email: "aman@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "amanPatidar     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"aman".trueLength()
"patidar".trueLength()