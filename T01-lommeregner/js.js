"use strict";

//laver variabler
const firstNum = document.querySelector("#firstnum");
const regneDropdown = document.querySelector("#regne-dropdown");
const secondNum = document.querySelector("#secondnum");
const beregn = document.querySelector("#beregn");
const result = document.querySelector("#result");

//laver en eventlistener, når man klikker på beregn knappen så afspiller den nedeståndende funktion
beregn.addEventListener("click", function () {

  console.log(firstNum.value, secondNum.value, regneDropdown.value);
  if (regneDropdown.value === "plus") { //hvis værdien i dropdown menuen er plus så skal der i p elementet
    //med id'en result, vises plus regnestykket mellem det første og andet tal, sådan fortsætter det ned
    //måden den gør det på er at man bruger parseInt til at konvertere valuen i input felterne til tal så de ikke konkantineres 
    result.innerHTML =
      parseInt(firstNum.value) + parseInt(secondNum.value);
  }
  else if (regneDropdown.value === "minus") {
    result.innerHTML =
      parseInt(firstNum.value) - parseInt(secondNum.value);
  }
  else if (regneDropdown.value === "division") {
    result.innerHTML =
      parseInt(firstNum.value) / parseInt(secondNum.value);
  }
  else if (regneDropdown.value === "gange") {
    result.innerHTML =
      parseInt(firstNum.value) * parseInt(secondNum.value);
  }
});

