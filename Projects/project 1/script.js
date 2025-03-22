const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener('click' , function (e) {
        const page = e.target.id
        if(page == 'grey'){
            body.style.backgroundColor = page
        }
        else if(page == 'white'){
            body.style.backgroundColor = page
        }
        else if(page == 'blue'){
            body.style.backgroundColor = page
        }
        else if(page == 'yellow'){
            body.style.backgroundColor = page
        }
    })
})