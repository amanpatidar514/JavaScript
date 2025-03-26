const User = {
    _email: 'a@ap.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const result = Object.create(User)
console.log(result.email);