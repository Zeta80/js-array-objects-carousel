//  Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata. Attenzione! Le immagini nello screenshot sono differenti da quelli  che vi invio, ma il layout non cambia.
// Milestone 0: []
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1: []
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2: []
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1: []
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2: []
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3: []
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. 

const games = [
    {
        image: 'img/assets/images/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/assets/images/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/assets/images/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/assets/images/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/assets/images/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// const images = [
//     "img/assets/images/img/01.webp",
//     "img/assets/images/img/02.webp",
//     "img/assets/images/img/03.webp",
//     "img/assets/images/img/04.webp",
//     "img/assets/images/img/05.webp",
// ];


//VERIFICA TESTO 
console.log(games);
const itemsContainer = document.querySelector(".items");
const thumbsContainer = document.querySelector(".thumbs");
let itemsList = "";
let thumbsList = "";

games.forEach(game => {
    itemsList += `
             <div class="item">
                 <img src="${game.image}" alt="" />
                 <h3> ${game.title} </h3>
                 <p> ${game.text} </p>
             </div>`;
    // Creo i thumbs
    thumbsList = `
            <div class="thumb">
                 <img src="${game.image}" alt="" />
             </div>`;
    console.log(thumbsList);
    itemsContainer.innerHTML = itemsList;
    thumbsContainer.innerHTML += thumbsList;

});


// for (let i = 0; i < images.length; i++) {
//     // Creo le immagini
//     itemsList += `
//             <div class="item">
//                 <img src="${images[i]}" alt="" />
//             </div>`;
//     // Creo i thumbs
//     thumbsList += `
//             <div class="thumb">
//                 <img src="${images[i]}" alt="" />
//             </div>`;
// }
// itemsContainer.innerHTML = itemsList;
// thumbsContainer.innerHTML += thumbsList;

// Lo stato iniziale dello slider
const sliderItems = document.getElementsByClassName("item");
const thumbItems = document.getElementsByClassName("thumb");
// console.log(thumbItems);
// console.log(sliderItems);
let activeItem = 0;
sliderItems[activeItem].classList.add("active");
thumbItems[activeItem].classList.add("active");


// Navigazione
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function () {
    // Tolgo active dall'immagine corrente
    sliderItems[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.remove("active");

    // Posso andare avanti finchè esiste l'immagine successiva (penultimo elemento)
    if (activeItem < sliderItems.length - 1) {
        // Passo avanti con lo slider
        //  incremento la posizione
        activeItem++;
    } else {
        activeItem = 0
    }

    //  aggiungo active alla nuova posizione
    sliderItems[activeItem].classList.add("active");
    thumbItems[activeItem].classList.add("active");
});

const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function () {
    sliderItems[activeItem].classList.remove("active");
    thumbItems[activeItem].classList.remove("active");
    // Posso andare indietro finché esisite l'immagine precedente (il secondo elemento)
    if (activeItem > 0) {
        activeItem--;
    } else {
        // Altrimenti riparto dall'ultimo elemento
        activeItem = sliderItems.length - 1;
    }
    sliderItems[activeItem].classList.add("active");
    thumbItems[activeItem].classList.add("active");
});


// Aggiungere spostamento dello slider al click sul thumb
for (let i = 0; i < thumbItems.length; i++) {
    const thisThumb = thumbItems[i];
    thisThumb.addEventListener("click", function () {
        // Cancellare active da slider item e dal thumb
        sliderItems[activeItem].classList.remove("active");
        thumbItems[activeItem].classList.remove("active");

        // Aggiornare la posizione attuale
        activeItem = i;

        // Aggiungere active alla nuova posizione dell'immagine e del thumb
        sliderItems[activeItem].classList.add("active");
        thumbItems[activeItem].classList.add("active");
    });
}