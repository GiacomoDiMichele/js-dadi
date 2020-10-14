var random_dado_primo = Math.floor(Math.random() * 6 ) + 1;

console.log("Lanciando il dado hai fatto: " + random_dado_primo);

var random_dado_secondo = Math.floor(Math.random() * 6 ) + 1;

console.log("Lanciando il dado hai fatto: " + random_dado_secondo);

if (random_dado_primo > random_dado_secondo) {
    console.log('ha vinto il primo giocatore');
} else {
    console.log('ha vinto il secondo giocatore');
}
