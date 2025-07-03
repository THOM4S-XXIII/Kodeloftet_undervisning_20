// Oppgave: Lag en while loop, som er sant så lenge variabel "count" med verdi 0. Lag også en while loop, som er sant så lenge variabel "count" er mindre enn 20. I hver iterasjon av loopen, skal det logges i console "Telling har nådd" + count, og så skal count plusses med 1.

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

// Forklaring:
// 1. Den første loopen kjører bare én gang, siden count starter på 0 og så blir til 1 i første omgang.
// 2. Den andre loopen fortsetter å kjøre og øker count helt til den når 20. Hver gang skriver den "Telling har nådd ..." til konsollen.

// Dette er en enkel måte å bruke while-løkker for å telle og logge til konsollen slik oppgaven krever.
