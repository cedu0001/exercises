"use strict";
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

let userChoice;
let ComputerChoice;

document.addEventListener("DOMContentLoaded", init);

function init(){
    rockBtn.addEventListener("click", rockClick);
    paperBtn.addEventListener("click", paperClick);
    scissorsBtn.addEventListener("click", scissorsClick);
}

function rockClick(){
    console.log("rock");
    userChoice = "rock";
    computerChooses();
}
function paperClick(){
    console.log("paper");
    userChoice = "paper";
    computerChooses();
}
function scissorsClick(){
    console.log("scissors");
    userChoice = "scissors";
    computerChooses();
}

function computerChooses(){
    console.log("ComputerChoice userChoice", userChoice);
    animateHandsStart();
    ComputerChoice = "scissors"
//lave enten et array med rock paper scissor, index 1, 2 -->
// eller math random 0 til 2 og så assign nummeret 
}

function animateHandsStart(){
    player1.classList.add("shake");
    player2.classList.add("shake");
    // shake klasser på de to hænder
    //eventlistener når animationen slutter brug animationend på den ene af animationerne
}


