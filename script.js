const advice = document.querySelector('#adviceText')
const adviceNum = document.querySelector('#adviceNum')
const dice = document.querySelector('#dice')


function getAdvice(){
    advice.innerHTML = "loading..."


    fetch ('https://api.adviceslip.com/advice', {cache: "no-cache"})
    .then(response => response.json())
    .then(data => {
        console.log(data.slip)
        advice.innerText = `"${data.slip.advice}"`
        adviceNum.innerText = `Advice #${data.slip.id}` 
    })
    .catch((error) => {
        console.log('error ',error)
    })
}

getAdvice()
dice.addEventListener('click', getAdvice)


