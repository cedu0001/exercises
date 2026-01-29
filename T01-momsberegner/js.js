/* Moms beregner
- Lav en funktion der modtager to argumenter, beloeb og moms. 
Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
- Lav moms som et default parameter sat til 25. */

"use strict";
const pris = 100;
let moms;


momsBeregner(pris, (moms = "25"));

function momsBeregner(pris, moms){
    console.log(pris + (pris *moms) / 100);
    
}




