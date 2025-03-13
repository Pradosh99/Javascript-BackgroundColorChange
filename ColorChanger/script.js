const buttons = document.querySelectorAll('.color-button');
const body = document.querySelector('body');

buttons.forEach((button) =>{
    button.addEventListener('click', (e) => {
        // console.log(e)
        // console.log(e.target)

        if(e.target.id === 'gray'){
            body.style.backgroundColor = 'gray'
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'red'
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'white'
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = 'purple'
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = 'pink'
        }
    })
})