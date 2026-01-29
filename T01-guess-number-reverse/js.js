"use strict";
/* 
Nu skal vi lave en “Gæt et tal” igen, men med rollerne byttet rundt:
Det er nu computeren der skal gætte det tal mellem 0 og 100 du tænker på.
Når du herefter klikker på en knap skal computeren komme med et kvalificeret gæt og det gæt skal vises på siden. 
Der skal så være tre knapper hvor brugeren kan fortælle computeren om dens gæt er for højt, for lavt eller om den har gættet rigtigt.
Der kan også være en knap til at starte det hele
Computeren skal gætte tallet hurtigst muligt.
Sørg for at man ikke kan klikke på knapper man ikke skal kunne klikke på.
For at få inspiration til løsningen af opgaven kan i sætte jer sammen i grupper af to og analysere hvad der foregår når man leger gæt et tal.
 */


const startGame = document.querySelector("#startgame");
const tooHigh = document.querySelector("#toohigh");
const tooLow = document.querySelector("#toolow");
const youWon = document.querySelector("#thatsright");


let min = 0;
let max = 100;
let number = Math.ceil(Math.random(min + max) * 100);
let realNumber = 47;

// skal starte computerens gæt
startGame.addEventListener("click", function () {
  number = Math.ceil(Math.random(min + max) * 100);
  document.getElementById("test").innerHTML = "Jeg gætter på " + number;
  console.log("Nyt tal:", number);
});



tooHigh.addEventListener("click", tooHigh);
tooLow.addEventListener("click", tooLow);
// computer vandt, men skal gætte igen
youWon.addEventListener("click", youWon);
/* tooHigh.addEventListener("click", );
tooLow.addEventListener("click", )
thatsRight.addEventListener("click",) */


/* guessNumber();
function guessNumber(){
    number = Math.floor(Math.random(min + max) * 100);
} */

// funktion som laver en ny beregning der tager number og laver et nyt regnestykke (too high)

// funktion som laver en ny beregning der tager number og laver et nyt regnestykke (too low)

console.log(number)

// "jeg gætter på ${guessedNumber}"

/*  number = Math.floor(Math.random(min + max)/2); */




// guessNumber();

// function guessNumber() {
//   const messageElement = document.getElementById("message");
//   if (number === realNumber) {
//     messageElement.textContent = "Tillykke, du gættede rigtigt!";
//   } else if (number > realNumber)
//     messageElement.textContent = "Haha det er for lavt";
//   else if (number < realNumber)
//     messageElement.textContent = "Haha det er for højt";
// }
// console.log("Nyt tal:", number);
// // man kan erklære to variabler for hvad den mindst må være og hvad den højest må være. min(0) max(100