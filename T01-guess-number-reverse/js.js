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

const lowerImg = document.querySelector("#lower");
const higherImg = document.querySelector("#higher");
const winnerImg = document.querySelector("#winner");


let min = 0;
let max = 100;
let number;

// skal starte computerens gæt
startGame.addEventListener("click", function (e) {
  number = Math.floor((min + max) / 2);
  document.getElementById("test").innerHTML = "Jeg gætter på " + number;
  console.log("Nyt tal:", number);

    lowerImg.classList.add("hide");
    winnerImg.classList.add("hide");
    higherImg.classList.add("hide");

  e.preventDefault();

tooHigh.addEventListener("click", (e) => {
    max = number;
    number = Math.floor((min + max) / 2);
    console.log(" tal:", number);
    document.getElementById("test").innerHTML = "Er det " + number + "?";
    
    lowerImg.classList.remove("hide");
    winnerImg.classList.add("hide");
    higherImg.classList.add("hide");
    
    e.preventDefault();

});

tooLow.addEventListener("click", (e) => {
    max = number;
    number = Math.floor((min + max) / 2);
    console.log(" tal:", number);
    document.getElementById("test").innerHTML = "Er det " + number + "?";

    lowerImg.classList.add("hide");
    winnerImg.classList.add("hide");
    higherImg.classList.remove("hide");

    e.preventDefault();
});

youWon.addEventListener("click", (e) => {
    document.getElementById("test").innerHTML = "Du vandt!";
    e.preventDefault();

    lowerImg.classList.add("hide");
    winnerImg.classList.remove("hide");
    higherImg.classList.add("hide");
});

});
