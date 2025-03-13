const form = document.querySelector('form')
console.log(form);


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#display-result')

    if(height === '' || height <=0 || isNaN(height)){
        result.innerHTML = `Please enter valid height: ${height}`
    }else if(weight === '' || weight <=0 || isNaN(weight)){
        result.innerHTML = `Please enter valid weight: ${weight}`
    }else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        if(bmi < 18.5){
            result.innerHTML = `Your BMI is ${bmi} and you are underweight.`
        }
        else if(bmi >= 18.5 && bmi < 25){
            result.innerHTML = `Your BMI is ${bmi} and you are normal weight.`
        }
        else if(bmi >= 25 && bmi < 30){
            result.innerHTML = `Your BMI is ${bmi} and you are overweight.`
        }
    }

})
    
