/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

// ? Genera 5 numeri casuali
    const randomNumbers = [];
    //Generare un numero casuale tra 0 e 50
    for (let i = 0; i < 5; i++) {
        randomNumbers[i] = Math.floor(Math.random() * 50);
    }
// ? Mostra i numeri in pagina
    //*Creo un div
    const numbersDiv = document.createElement('div');
    numbersDiv.textContent = randomNumbers.join(',');
    document.getElementById('out').appendChild(numbersDiv)