/* Lista Cognomi
Chiedere all’utente il cognome,
inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
Stampa la lista ordinata alfabeticamente.
Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
 */

// #1 Creare un array con la lista dei cognomi
var listaCognomi = ["Rossi", "Verdi", "Bianchi", "Esposito", "Gallo", "Costa", "Fontana", "Zaghini", "Leone"]
console.log("Lista iniziale:", listaCognomi);
document.getElementById("surname").innerHTML = listaCognomi;

// #2 Chiedere all'utente il cognome ed inserirlo nell'array dei cognomi
listaCognomi.push(prompt("Scrivi il tuo cognome"));
console.log("Lista dopo l'aggiunta:", listaCognomi);
document.getElementById("surname-add").innerHTML = listaCognomi;

// #3 Stampa la lista dei cognomi in ordine alfabetico
listaCognomi.sort()
console.log("Lista in ordine alfabetico:", listaCognomi);
document.getElementById("surname-sort").innerHTML = listaCognomi;

// #4 Scrivi la posizione "umana" della lista
for (i = 1; i < listaCognomi.length; i++) {
    console.log("Lista numerata:", i, listaCognomi[i]);
    document.getElementById("surname-numb").innerHTML += i + " " + listaCognomi[i] + ", ";
}