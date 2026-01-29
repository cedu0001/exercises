"use strict";
//Jeg erklærer en masse variabler, hvor jeg derefter så vælger vha. document.querySelector hvad der skal blive erklæret som en variabel
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

//Her erklærer jeg to variabler, hvis værdi ændrer sig, da de indeholder data om brugerens valg og computerens valg
let userChoice;
let ComputerChoice;

//Event listener der venter på at DOM er loaded, hvorefter den kører "init" funktionen
document.addEventListener("DOMContentLoaded", init);

//Denne funktion venter og lytter efter et "click", altså når man klikker på knapperne, rockBtn, paperBtn og scissorsBtn 
// (som er .rock, .paper. .scissors), vil de spille hver en funktion, det som står efter "click"
function init(){
    rockBtn.addEventListener("click", rockClick);
    paperBtn.addEventListener("click", paperClick);
    scissorsBtn.addEventListener("click", scissorsClick);
}

//Det som funktionerne gør er at de erklærer at værdien for variblen, 
// userChoice er i den tilsvarende funktion "rock", samtidig med at vi som bruger vælger, kører funktionen computerChooses();

function rockClick(){
    console.log("rock");
    userChoice = "rock";
    computerChooses();
    lose.classList.add("hidden"); // de her fjerner teskten der viser på skærmen
    win.classList.add("hidden");
    draw.classList.add("hidden");
}

function paperClick(){
    console.log("paper");
    userChoice = "paper";
    computerChooses();
    lose.classList.add("hidden");
    win.classList.add("hidden");
    draw.classList.add("hidden");
}
function scissorsClick(){
    console.log("scissors");
    userChoice = "scissors";
    computerChooses();
    lose.classList.add("hidden");
    win.classList.add("hidden");
    draw.classList.add("hidden");
}

//Denne funktion er brugerens modstander, nemlig computeren, det som den gør er at den starter en animation, 
// hvor den sammentidig skal udregne tilfældigt, hvilket træk den vil bruge
function computerChooses(){
    console.log("ComputerChoice userChoice", userChoice);
    animateHandsStart();

    const choice = ["rock", "paper", "scissors"]; //En variabel med datatypen Array, der indeholder 3 valg
    let arrayNumber = Math.floor(Math.random() * 3); //Generer et random nummer mellem 0-2
    ComputerChoice = choice[arrayNumber]; // Derefter vælger det et af de 3 valg baseret på Math.random nummeret, og så derefter kan se på arrayet hvilket billede der skal vises


}

//Denne her funktion spiller animationen som får hænderne til at bevæge sig
//Derefter bruger man animationend eventet, som så lytter og aktiveres når CSS animationen fuldført, 
// hvor den fjerner animationen og derfter tilføjer brugerens og computerens svar, som så også bliver vist
function animateHandsStart(){
    player1.classList.add("shake"); //tilføjer animation
    player2.classList.add("shake"); //tilføjer animation
    
    player1.addEventListener("animationend", () => {
    player1.classList.remove("shake"); //fjerner animation
    player1.classList.add(userChoice); //tilføjer billedet, som feks saks, som så er tilhørende det svar som brugeren har givet
});
player2.addEventListener("animationend", () => {
    player2.classList.remove("shake"); //fjerner animation
    player2.classList.add(ComputerChoice); //tilføjer billedet, som feks saks, som så er tilhørende det svar som computeren har generert

//If statements er til for at give spillet dens ramme ift reglerne, hvornår man vinder, taber og når det er uafgjort.


        if (userChoice === "rock" && ComputerChoice === "rock"){ //eksempel på oversættelse: hvis brugerens valg er sten og computer valg er sten, så er det ufagjort
    draw.classList.remove("hidden");
    } if(userChoice === "rock" && ComputerChoice === "scissors"){ //eksempel på oversættelse: hvis brugerens valg er sten og computer valg er saks, så har brugeren vundet
        win.classList.remove("hidden");
    } if(userChoice === "rock" && ComputerChoice === "paper"){ //eksempel på oversættelse: hvis brugerens valg er sten og computer valg er papir, så har computeren vundet
        lose.classList.remove("hidden");
    }

        if (userChoice === "paper" && ComputerChoice === "paper"){
    draw.classList.remove("hidden");
    } if(userChoice === "paper" && ComputerChoice === "rock"){
        win.classList.remove("hidden");
    } if(userChoice === "paper" && ComputerChoice === "scissor"){
        lose.classList.remove("hidden");
    }
        if (userChoice === "scissors" && ComputerChoice === "scissors"){
    draw.classList.remove("hidden");
    } if(userChoice === "scissors" && ComputerChoice === "paper"){
        win.classList.remove("hidden");
    } if(userChoice === "scissors" && ComputerChoice === "rock"){
        lose.classList.remove("hidden");
    }

});

}
