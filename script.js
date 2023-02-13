let apiAdvices = [];
const newAdvicebtn = document.getElementById('dice-button');
const adviceText = document.getElementById('advice');
const adviceID = document.getElementById('advice-id');


async function getAdvice(){
    const apiURL = 'https://api.adviceslip.com/advice';

    try {
        const response = await fetch(apiURL);
        apiAdvices = await response.json();
        newAdvice();
    } catch (error) {
        alert('error');
    }
}

function newAdvice(){
    const adviceSlip = apiAdvices.slip;

    adviceText.textContent = adviceSlip.advice;
    adviceID.textContent = `Advice #${adviceSlip.id}`;

}

newAdvicebtn.addEventListener("click", function(){
    getAdvice();
});

getAdvice();