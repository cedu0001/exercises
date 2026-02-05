/*     Lav nogle hardcodede filtreringer:
        1. en der viser alle el drevne fartøjer
        2. en der viser alle fartøjer med mere end 2 sæder
        3. alle el-drevne fartøjer ejet af Jonas
        4. alle rugbrøds drevne fartøjer med plads til mere end en.

    Lav nogle if statements i showTheseVehicles funktionen så tabellen 
    bliver smukkere: uden undefined og tomme felter og true;

    Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede 
    + 1 knap til at vise alle (ufiltreret)

    Style tabellen endnu mere
 */

// Opretter et array (liste) af objekter, hvor hvert objekt repræsenterer et køretøj med forskellige egenskaber
const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// Finder det HTML-element, der har tagget "tbody"
const tbodyPointer = document.querySelector("tbody");

// Kalder funktionen showTheseVehicles med hele vehicles-arrayet som argument
showTheseVehicles(vehicles);

// Definerer en funktion, der viser de køretøjer, der er i arrayet 'arr'
function showTheseVehicles(arr) {
  // Rydder indholdet i tbody, så vi starter med en tom tabelkrop
  tbodyPointer.innerHTML = "";
  // Looper igennem hvert køretøj i arrayet
  arr.forEach((each) => {

    // Tjekker om køretøjet er elektrisk, og sætter isElectric til "Ja" eller "Nej"
    let isElectric;
    if(each.isElectric){
      isElectric = "Ja";
    } else {
      isElectric = "Nej";
    }

    // Tjekker om køretøjet er en tandemcykel, og sætter isTandem til "Ja" eller "Nej"
    let isTandem;
    if(each.isTandem){
      isTandem = "Ja";
    } else {
      isTandem = "Nej";
    }

    // Tilføjer en ny række til tabellen med data fra det aktuelle køretøj
    // Hvis en egenskab ikke findes (f.eks. fuel), bruges en standardværdi (f.eks. "Elektrisk")
    tbodyPointer.innerHTML += `<tr>
      <td>${each.type}</td>
      <td>${each.fuel || "Elektrisk"}</td>
      <td>${each.passengers}</td>
      <td>${each.stops || "Ingen stop"}</td>
      <td>${each.ownedBy || "Movia"}</td>
      <td>${isElectric}</td>
      <td>${isTandem}</td>
    </tr>`;
  });
}

// Tilføjer en event listener til knappen med id "showAll", der viser alle køretøjer
document.getElementById("showAll").addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

// Tilføjer en event listener til knappen med id "electricVehicles", der filtrerer og viser kun elektriske køretøjer
document.getElementById("electricVehicles").addEventListener("click", () => {
  const electricVehicles = vehicles.filter(
    (vehicle) => vehicle.isElectric === true,
  );
  showTheseVehicles(electricVehicles);
});

// Tilføjer en event listener til knappen med id "moreThanTwoSeats", der filtrerer og viser kun køretøjer med mere end 2 passagerpladser
document.getElementById("moreThanTwoSeats").addEventListener("click", () => {
  const vehiclesWithMoreThanTwoSeats = vehicles.filter(
    (vehicle) => vehicle.passengers > 2,
  );
  showTheseVehicles(vehiclesWithMoreThanTwoSeats);
});

// Tilføjer en event listener til knappen med id "electricOwnedByJonas", der filtrerer og viser kun elektriske køretøjer ejet af Jonas
document.getElementById("electricOwnedByJonas").addEventListener("click", () => {
  const electricVehiclesOwnedByJonas = vehicles.filter(
    (vehicle) => vehicle.isElectric === true && vehicle.ownedBy === "Jonas",
  );
  showTheseVehicles(electricVehiclesOwnedByJonas);
});

//alle rugbrøds drevne fartøjer med plads til mere end en.
// Tilføjer en event listener til knappen med id "extraseats", der filtrerer og viser kun køretøjer med mindst 2 passagerpladser
document.getElementById("extraseats").addEventListener("click", () => {
  const vehiclesWithAtLeastTwoSeats = vehicles.filter(
    (vehicle) => vehicle.passengers > 1 && vehicle.fuel === "Rugbrød");
  showTheseVehicles(vehiclesWithAtLeastTwoSeats);
});

// Kalder funktionen showTheseVehicles med hele vehicles-arrayet som argument, så alle køretøjer vises ved sidenes start
showTheseVehicles(vehicles);