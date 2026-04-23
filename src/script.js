
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

const carouselImgEl = document.getElementById("carouselImagine");

if (carouselImgEl) {
    let indexImagine = 0;

    setInterval(() => {
        indexImagine = (indexImagine + 1) % carouselImagini.length;
        carouselImgEl.src = carouselImagini[indexImagine];
        carouselImgEl.alt = `Retezat ${indexImagine + 1}`;
    }, 5000);
}

if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", {});
}