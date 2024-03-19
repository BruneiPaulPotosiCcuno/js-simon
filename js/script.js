/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

// ? Genera 5 numeri casuali
    const randomNumbers = [];
    //Generare un numero casuale tra 0 e 50
    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
// ? Mostra i numeri in pagina
    //*Creo un div
    const numbersDiv = document.createElement('div');
    for (const number of randomNumbers){
        //Crea un elemento per ogni numero
        const numberSpan = document.createElement('span');
    }
    
// ? Rimuovi i numeri dalla pagina

// ? Chiedi all'utente di inserire i numeri

// ? Verifica quali numeri sono stati indovinati

// ? Mostra i risultati

