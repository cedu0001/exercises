/* Moms beregner
- Lav en funktion der modtager to argumenter, beloeb og moms. 
Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
- Lav moms som et default parameter sat til 25. */

"use strict";
const pris = 100;
let moms;

//det hedder argumenter når man kalder funktionen
momsBeregner(pris);

//parametre når du kigger på funktionen
function momsBeregner(pris, moms = 25){
    console.log(pris + (pris * moms) / 100);
    
}




