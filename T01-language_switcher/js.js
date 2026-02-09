"use strict";

/* I denne opgave skal du lave noget javaScript der kan 
skifte sproget på en simpel HTML-side.

I første om gang er sproget sat til dansk: const locale = "da";

Så du skal finde texts i sproget der er valgt og udskifte teksterne 
på de rigtige querySelectorer ... */


const texts = {
  de: {
    texts: [ //texts objektet indeholder teksterne for hvert sprog (da og de)
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da"; //"locale" variabel bestemmer hvilket sprog der skal bruges

const dropdown = document.querySelector("#switchlang");

dropdown.addEventListener("change", (event) =>{
    locale = event.target.value; // variabel ændres så den lytter til hvornår værdien skifter
    updateTexts(); // kalder funktionen for at opdatere teksterne
    
});

 

console.log(locale);

//funktion der opdaterer teksterne på siden
function updateTexts(){
    //hent teksterne for det valgte sprog
    // [locale] menes ved at man bruger værdien af locale
    // til at hente den rigtige egenskab fra texts-objektet, så kan 
    //const selectedTexts vurderer hvilken oversættelse den skal "hente/vise"
    const selectedTexts = texts[locale].texts; 

    // gå igennem hver tekst
    selectedTexts.forEach((translatedtekst) =>{
      const elementHTML = document.querySelector(translatedtekst.location);

        // Hvis elementet findes, udskift teksten
        if (elementHTML){
          elementHTML.textContent = translatedtekst.text;
        }
    });

    

}

//lytter til at 
document.addEventListener("DOMContentLoaded", updateTexts);

