//Array fra opgave beskrivelsen
const curseWords = [  {    bad: "var",    good: "const",  },  
    {    bad: "float",    good: "grid",  },  
    {    bad: "marquee",    good: "just don't",  },];


//Laver 4 variabler som selecter, p, sfw knappen, dialog boksen og luk knappen
const p = document.querySelector("p");
const btnSFW = document.querySelector("#SFWbtn");
const dialogBox = document.querySelector("#dialogbox");
const btnClose = document.querySelector("#closebtn");

//Laver en event listener til knappen , som kører updateSFW funktionen
btnSFW.addEventListener("click", updateSFW);


// Funktionen kører, hvor der først laves en variable let, da variablens værdi ændrer sig senere
function updateSFW(){
    let textSwitch = p.textContent;

    curseWords.forEach((word) =>{ // Går igennem hvert objekt i curseWords-arrayet.
        // Erstatter alle forekomster af det "dårlige" ord (word.bad) med det "gode" ord (word.good) i teksten. 
        // replaceAll erstatter alle forekomster af ordet i hele teksten.
        textSwitch = textSwitch.replaceAll(word.bad, word.good); 
    });

    //Opdaterer teksten i <p>-elementet med den filtrerede tekst, der nu indeholder de "gode" ord.
    p.textContent = textSwitch; 
    //Sætter p dataset-filter til true sååå..
    p.dataset.filter = "true";


   // Hvis p, datafilter er true, så skal dialog boksen vises (og det sker så hvis brugeren klikker på knappen igen)
    if (p.dataset.filter === "true") {
        dialogBox.showModal();
        return;
    } 

}

// Dette lukker for dialog boksen
btnClose.addEventListener("click", () => {
    dialogBox.close();
});

