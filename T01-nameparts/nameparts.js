/* Given a name string, e.g. “Peter Heronimous Lind” - 
split the string into three variables: firstName, middleName and lastName.

Hint: use indexOf and substring 

Expect the name to be a const - you can’t modify it.

Console.log the three variables at the very end of your code. */

let fullName = "Peter Heronimous Lind";

//Find positionerne for mellemrummene
const firstSpace = fullName.indexOf(" "); //finder det første mellemrum
const lastSpace = fullName.lastIndexOf(" "); //finder det sidsteme


const firstName = fullName.substring(0, firstSpace); //start på 0 og siger til det første mellemrum
const middleName = fullName.substring(firstSpace + 1, lastSpace); //starter på det første mellemrum + 1 så det er H, og slutter ved det sidste mellemrum
const lastName = fullName.substring(lastSpace + 1); //starter på det sidste mellemrum og siger + 1 så den hopper en plads 


console.log(`${middleName}`)

console.log(`Jeg hedder ${fullName}. 
    Mit fornavn er ${firstName}, 
    mit mellemnavn er ${middleName}, og mit efternavn er ${lastName}`)






