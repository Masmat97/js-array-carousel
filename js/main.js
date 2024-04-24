let slides = document.getElementsByClassName("slide");
let immagineAttuale;
let prossimaSlide;


for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];



    if (slide.classList.contains("active")) {
        slide.classList.remove("active");
        immagineAttuale = i;

    }
}

prossimaSlide = immagineAttuale + 1;

if ((prossimaSlide) >= slides.length) {
    prossimaSlide = 0

}


slides[prossimaSlide].classList.add("active");

console.log(`posto la selezione da ${immagineAttuale} a ${prossimaSlide}`);

document.getElementById("btnPrev").addEventListener("click", function () {
    let slides = document.getElementsByClassName("slide");
    let immagineAttuale;
    let prossimaSlide;


    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];



        if (slide.classList.contains("active")) {
            slide.classList.remove("active");
            immagineAttuale = i;

        }
    }

    prossimaSlide = immagineAttuale + 1;

    if ((prossimaSlide) >= slides.length) {
        prossimaSlide = 0

    }


    slides[prossimaSlide].classList.add("active");
    console.log("");
})