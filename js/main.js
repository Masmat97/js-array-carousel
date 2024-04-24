let slides = document.getElementsByClassName("slide");

let immagineAttuale;
let prossimaSlide;


for (let i = 0; i < slides.length; i++) {

    const slide = slides[i];
    // console.log(i, slide);


    if (slide.classList.contains("active")) {
        slide.classList.remove("active");
        immagineAttuale = i;
        // console.log("Ho rimosso la classe active dall' elemento", i)
    }
}

prossimaSlide = immagineAttuale + 1;

if ((prossimaSlide) >= slides.length) {
    prossimaSlide = 0

}


slides[prossimaSlide].classList.add("active");

console.log(`posto la selezione da ${immagineAttuale} a ${prossimaSlide}`);

document.getElementById("btnPrev").addEventListener("click", function()) {
	
    console.log("");
}