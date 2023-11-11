function getAdvice(){
    const url = `https://api.adviceslip.com/advice`

    var texto = document.querySelector('#message')
    var num = document.querySelector('#numb')
    

    fetch(url).then(resp => resp.json())
    .then(/*resp => console.log(resp.slip.advice)*/  
        resp =>
            {texto.innerHTML = `“ ${resp.slip.advice} ”`; num.innerHTML = resp.slip.id} 
     )

}