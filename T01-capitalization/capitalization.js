/* Use the 3caPitalization exercise as a basis for this exercise. 
Modify the code, so that only the first letter is upper case, and the rest is lower case.
Make sure that it can take names of any length! */

function formatName(name) {
    //Tag det første bogstav og lav det stort
    let firstLetter = name.substring(0,1).toUpperCase();

   //Tag resten af navnet og lav det småt
   let restOfName = name.substring(1).toLowerCase();

   return firstLetter + restOfName;
}

// Test med forskellige navne
console.log(formatName("peter"));   // "Peter"
console.log(formatName("christian")); // "Christian"

/* 
substring(0, 1).toUpperCase() tager det første bogstav og laver det stort.
substring(1).toLowerCase() tager resten af navnet (fra det 2. bogstav og frem) og laver det småt.
Samlet resultat: De to dele sættes sammen til det endelige navn.
 
Koden tager det første bogstav uanset længden af navnet.
substring(1) tager automatisk resten af navnet, uanset hvor langt det er.
Derfor virker det for alle navne, uanset længde.


*/