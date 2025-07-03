// Oppgave 1: Lag en while loop, som er sant så lenge variabel "count" med verdi 0. Lag også en while loop, som er sant så lenge variabel "count" er mindre enn 20. I hver iterasjon av loopen, skal det logges i console "Telling har nådd" + count, og så skal count plusses med 1.

// 1. While loop som kjører så lenge count === 0:
let count = 0;
while (count === 0) {
  console.log('Telling har nådd ' + count);
  count += 1;
}

// 2. While loop som kjører så lenge count < 20:
while (count < 20) {
  console.log('Telling har nådd ' + count);
  count += 1;
}

// Forklaring oppgave 1:
// 1. Den første loopen kjører bare én gang, siden count starter på 0 og så blir til 1 i første omgang.
// 2. Den andre loopen fortsetter å kjøre og øker count helt til den når 20. Hver gang skriver den "Telling har nådd ..." til konsollen.

// Oppgave 2: Lag samme loop, men som en for loop.

// Her er begge løkkene skrevet som for-loops:

// 1. For-loop for count === 0 (kjører én gang):
for (let count = 0; count === 0; count++) {
  console.log("Telling har nådd " + count);
}

// 2. For-loop for count < 20:
for (let count = 1; count < 20; count++) {
  console.log("Telling har nådd " + count);
}

// Forklaring oppgave 2:
// - Den første for-loopen kjører én gang så lenge count er 0.
// - Den andre for-loopen starter på 1 og teller opp til (men ikke med) 20, og logger hver verdi til konsollen. (Hvis du vil starte på 0, endre `let count = 1` til `let count = 0`; det avhenger om du vil fortsette fra forrige loop eller starte på nytt.)


// Bonus oppgave: Lag samme loop, men som en "Do while loop"
let count3 = 0;
do { 
  console.log("Tellingen har nådd" + count3)
  count3++;
} while (count3 < 20)


// ForEach
const fruits = ["Eple", "Banan", "Mango", "Ananas"];

function fruitPrinter(fruit) { 
  console.log(fruit);
}

fruits.forEach(fruitPrinter());

// Map
const numbers = [3, 7, 13, 2, 5];
let numbersDoubled = numbers.map(function(num) { 
  return num * 2;
});
console.log(numbersDoubled);

