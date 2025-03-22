const form = document.querySelector('form')

form.addEventListener('submit' , function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector(".height").value)
    const weight = parseInt(document.querySelector(".weight").value)
    const result = document.querySelector('.result')

    if(height == "" || height < 0 || isNaN(height)){
        result.innerHTML = `Enter a valid Height ${height}`
    }
    else if(weight == "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Enter a valid Height ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `Your BMI is : ${bmi}`
        const res = document.querySelector('.res')
        
        if(bmi < 18.6){
            res.innerHTML = "Under Weight"
            res.style.color = "blue"
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            res.innerHTML = "Normal Range"
            res.style.color = "green"
        }
        else {
            res.innerHTML = "OverWeight"
            res.style.color = "red"
        }
    }

})

