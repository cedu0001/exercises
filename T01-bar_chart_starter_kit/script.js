const list = document.querySelector("ul"); //Laver en variabel af ul elementet

const columnArray = []; //Laver en variabel med dataypen array som er tom
setInterval(generateColumns, 500); //Her laver man en interval, som gentager sig flere gange
//inde i den henter den funktionen, generateColumns 

function generateColumns() {
    const randomHeight = Math.round(Math.random()*100); //laver en variabel som genererer et random tal
    const li = document.createElement("li"); //her kreerer man et li elementet
    li.style.setProperty("--height", randomHeight); //her går man ind og styler li elementet, hvor man selecter klassen og så kobler variablen
    list.appendChild(li); //tilføjer elementet til DOM'en

 columnArray.push(randomHeight); //Her tager man array'et og push'er, 
 // dvs det tilføjerelementer til slutningen af ​​et array 
 // og returnerer den nye længde af arrayet - og med randomHeight genererer man et tal

    console.log(columnArray);
    if(columnArray.length > 19){ //Hvis columnArray's længde er mindre end 19, 
    // så skal den udtrække et element fra begyndelsen, samt fjerne det første child i listen

        columnArray.shift();
       list.firstElementChild.remove();

    }
 
}

//når der er mere end 5, så skal de fjerne den første
//first element child, remove child
//array og dom kan kører adskilt
