/* 
Fremgangsmåde:

    1. Start evt. med at lave en simpel HTML-struktur. Du skal have et navigationselement (<nav>) 
    til at vise dine brødkrummepunkter, samt en knap til at udløse genereringen af brødkrummestien.

    2. Lav en funktion, der returnerer navnet på hvert punkt i brødkrummenavigationen 
    i et liste-element med et tilhørende link. Det sidste punkt skal kun være tekst uden et link.

    3. Interaktion med knappen: Tilføj en event listener til din knap, så når den klikkes, 
    vil din breadcrumb-genererende funktion blive kaldt, og resultatet vil blive vist på dit website.

    4. Styling: Listeelementerne i brødkrummestien skal optræde på en række og være opdelt af en skråstreg 
    (/) eller lignende symbol. Skråstregen skal ikke være en del af det klikbare link.

Lav gerne kommentarer i din kode for at forklare, hvordan de forskellige dele fungerer.
 */

const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const generateBtn = document.querySelector("button");
const list = document.querySelector("ul");

generateBtn.addEventListener("click", klik);

function klik (evt) {
    list.innerHTML = ""; //her sørger den for at listen af links er tom, når man klikker på knappen
    
    bc.forEach((breadCrumb, index) => {// på denne linje siger man at for hvert element i bc array'et, 
    // skal den køre en funktion som tager to parametre, breadCrumb og index, 
        const listItem = document.createElement("li"); //her laver man en variabel, der hedder listItem til li elementet i DOM'en

        if (index === bc.length - 1){ //tjekker om det er det sidste element
        // hvis det er det sidste element tilføjer den kun teksten og ikke noget link
            listItem.textContent = breadCrumb.name; 
        } 
        else { //ellers , så vil den tilføje links
            const linkItem = document.createElement("a"); // her laves der en variabel, der siger linkItem skal lave a link

            linkItem.href = breadCrumb.link; // linkItem.href er breadcrumbs' links.
            linkItem.textContent = breadCrumb.name;// linkItem.textContent er breadcrumbs' navne.

            listItem.appendChild(linkItem); // her tilføjes der <a> til <li> i DOM'en
        }

        list.appendChild(listItem);  // her tilføjes der <li> til <ul> i DOM'en

    });
};




