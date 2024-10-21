let slides = document.getElementsByClassName("slide");

function cambiaSlide(avanti = true) {
    let immagineAttuale;
    let prossimaSlide;

    // Trova l'immagine attualmente attiva
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        console.log(i, slide)

        if (slide.classList.contains("active")) {
            slide.classList.remove("active");
            immagineAttuale = i;
            break; // Non serve continuare a cercare dopo aver trovato la slide attiva
        }
    }

    // Calcola la prossima slide
    if (avanti) {
        prossimaSlide = immagineAttuale + 1;
        if (prossimaSlide >= slides.length) {
            prossimaSlide = 0; // Torna alla prima slide
        }
    } else {
        prossimaSlide = immagineAttuale - 1;
        if (prossimaSlide < 0) {
            prossimaSlide = slides.length - 1; // Torna all'ultima slide
        }
    }

    // Aggiungi la classe "active" alla prossima slide
    slides[prossimaSlide].classList.add("active");

    console.log(`posto la selezione da ${immagineAttuale} a ${prossimaSlide}`);
}

// Esegui il cambio automatico della slide in avanti
cambiaSlide(true);

// Aggiungi un listener per il pulsante precedente (cambio slide indietro)
document.getElementById("btnPrev").addEventListener("click", function () {
    cambiaSlide(false); // Cambio slide indietro
});

// Aggiungi listener per il pulsante successivo (cambio slide avanti)
document.getElementById("btnNext").addEventListener("click", function () {
    cambiaSlide(true); // Cambio slide avanti
});
