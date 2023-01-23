let randomAdviceID = document.getElementById('advice-id');
let randomAdvice = document.getElementById('advice-container');

async function fetchRandomAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let advice = await response.json();
    console.log(response);
    let myRandomAdviceID = advice.slip.id;
    let myRandomAdvice = advice.slip.advice;
    console.log(myRandomAdvice);
    randomAdvice.textContent = "\"" + myRandomAdvice + "\"";
    randomAdviceID.textContent = myRandomAdviceID;
}

fetchRandomAdvice();