/* Given a single name string in an unknown case, e.g. “peter” or “PETER” - 
create a new string with the same name, where the third letter is uppercase, 
and the rest is lowercase. I.e. “peTer”.

Hint: use substring, toUpperCase, toLowerCase and simple string concatenation

Test your code with various crazy combinations of your own name, 
like “pETer”, “PEter”, “peteR”, “PEtER” and so on.

Make sure that it also works with longer names. 
Don't worry about names shorter than 3 characters. */

let strName = "peter";
let tlName = "peTer";


//pETer
console.log( strName.substring(0,1) + strName.substring(1,3).toUpperCase() + strName.substring(3,5));

//PEter
console.log( tlName.substring(0,2).toUpperCase() + tlName.substring(2,3).toLowerCase() + tlName.substring(3,5));

/// anden løsning


//først laver man en function med parameteret navn -->
function formatName(name) {
    // Lav hele navnet til små bogstaver først
    let lowerName = name.toLowerCase();

    // Tag de første 2 bogstaver
    let firstTwo = lowerName.substring(0, 2);

    // Tag det 3. bogstav og lav det stort
    let thirdUpper = lowerName.substring(2, 3).toUpperCase();

    // Tag resten af navnet (fra det 4. bogstav og frem)
    let rest = lowerName.substring(3);

    // Sæt det hele sammen
    return firstTwo + thirdUpper + rest;
}

// Test med forskellige navne
console.log(formatName("peter"));   // "peTer"
console.log(formatName("christian")); // "chRistian"


/* 
toLowerCase() laver hele navnet om til små bogstaver, så vi starter med et ensartet udgangspunkt.
substring(0, 2) tager de første 2 bogstaver (som forbliver små).
substring(2, 3).toUpperCase() tager det 3. bogstav og laver det stort.
substring(3) tager resten af navnet (fra det 4. bogstav og frem) og beholder det som små bogstaver.
Samlet resultat: De 3 dele sættes sammen til det endelige navn. */


