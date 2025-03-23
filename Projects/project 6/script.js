const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
console.log(randomColor())

let interval;
const changeColor = function () {
    if(!interval){
        interval = setInterval(changeBgColor , 1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopColor = function(){
    clearInterval(interval)
    interval = null
}

document.querySelector('#start').addEventListener('click' , changeColor)
document.querySelector('#stop').addEventListener('click' , stopColor)