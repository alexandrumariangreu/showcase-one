
const hamburgerEl = document.getElementById("hamburger");
const meniuEl = document.getElementById("meniu");

if (hamburgerEl && meniuEl) {
    const spans = hamburgerEl.querySelectorAll("span");
    let meniuDeschis = false;

    const deschideMeniu = () => {
        const offset = spans[1].offsetTop - spans[0].offsetTop;

        spans[0].style.transform = `translateY(${offset}px) rotate(45deg)`;
        spans[1].style.opacity = "0";
        spans[2].style.transform = `translateY(${-offset}px) rotate(-45deg)`;

        meniuEl.classList.remove("max-h-0", "-translate-y-4", "opacity-0");
        meniuEl.classList.add("max-h-96", "translate-y-0", "opacity-100");
        hamburgerEl.setAttribute("aria-expanded", "true");
        meniuDeschis = true;
    };

    const inchideMeniu = () => {
        spans[0].style.transform = "";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "";

        meniuEl.classList.add("max-h-0", "-translate-y-4", "opacity-0");
        meniuEl.classList.remove("max-h-96", "translate-y-0", "opacity-100");
        hamburgerEl.setAttribute("aria-expanded", "false");
        meniuDeschis = false;
    };

    hamburgerEl.addEventListener("click", () => {
        if (meniuDeschis) {
            inchideMeniu();
        } else {
            deschideMeniu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
            inchideMeniu();
        }
    });
}

const carouselImagini = [
    "img/retezat-1.jpg",
    "img/retezat-2.jpg",
    "img/retezat-3.jpg",
    "img/retezat-4.jpg"
];

const carouselImgA = document.getElementById("carouselImagineA");
const carouselImgB = document.getElementById("carouselImagineB");

if (carouselImgA && carouselImgB) {
    let indexImagine = 0;
    let imagineActiva = carouselImgA;
    let imagineInactiva = carouselImgB;

    const schimbaImaginea = () => {
        const urmatorIndex = (indexImagine + 1) % carouselImagini.length;
        imagineInactiva.src = carouselImagini[urmatorIndex];
        imagineInactiva.alt = `Retezat ${urmatorIndex + 1}`;

        imagineInactiva.classList.remove("opacity-0", "scale-105");
        imagineInactiva.classList.add("opacity-100", "scale-100");

        imagineActiva.classList.remove("opacity-100", "scale-100");
        imagineActiva.classList.add("opacity-0", "scale-105");

        const temp = imagineActiva;
        imagineActiva = imagineInactiva;
        imagineInactiva = temp;
        indexImagine = urmatorIndex;
    };

    setInterval(schimbaImaginea, 5000);
}

if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", {});
}