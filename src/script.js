
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const meniu = document.getElementById("meniu");
    const overlay = document.getElementById("menuOverlay");
    const inchideMeniu = document.getElementById("inchideMeniu");

    if (!hamburger || !meniu) {
        return;
    }

    let meniuDeschis = false;

    function deschideMeniu() {
        meniuDeschis = true;

        hamburger.setAttribute("aria-expanded", "true");

        const liniiHamburger = hamburger.querySelectorAll("span");

        if (liniiHamburger.length === 3) {
            liniiHamburger[0].classList.add("rotate-45", "translate-y-4");
            liniiHamburger[1].classList.add("opacity-0");
            liniiHamburger[2].classList.add("-rotate-45", "-translate-y-4");
        }

        if (meniu.classList.contains("-translate-y-full")) {
            meniu.classList.remove("-translate-y-full", "opacity-0", "pointer-events-none");
            meniu.classList.add("translate-y-0", "opacity-100", "pointer-events-auto");
        }

        if (meniu.classList.contains("h-0")) {
            meniu.classList.remove("h-0");
            meniu.classList.add("h-64");
        }

        if (overlay) {
            overlay.classList.remove("hidden");
        }
    }

    function inchideMeniul() {
        meniuDeschis = false;

        hamburger.setAttribute("aria-expanded", "false");

        const liniiHamburger = hamburger.querySelectorAll("span");

        if (liniiHamburger.length === 3) {
            liniiHamburger[0].classList.remove("rotate-45", "translate-y-4");
            liniiHamburger[1].classList.remove("opacity-0");
            liniiHamburger[2].classList.remove("-rotate-45", "-translate-y-4");
        }

        if (meniu.classList.contains("translate-y-0")) {
            meniu.classList.remove("translate-y-0", "opacity-100", "pointer-events-auto");
            meniu.classList.add("-translate-y-full", "opacity-0", "pointer-events-none");
        }

        if (meniu.classList.contains("h-64")) {
            meniu.classList.remove("h-64");
            meniu.classList.add("h-0");
        }

        if (overlay) {
            overlay.classList.add("hidden");
        }
    }

    hamburger.addEventListener("click", () => {
        if (meniuDeschis) {
            inchideMeniul();
        } else {
            deschideMeniu();
        }
    });

    if (inchideMeniu) {
        inchideMeniu.addEventListener("click", inchideMeniul);
    }

    if (overlay) {
        overlay.addEventListener("click", inchideMeniul);
    }

    const linkuriMeniu = meniu.querySelectorAll("a");

    linkuriMeniu.forEach((link) => {
        link.addEventListener("click", () => {
            inchideMeniul();
        });
    });

    if (typeof Fancybox !== "undefined") {
        Fancybox.bind('[data-fancybox="gallery"]', {});
    }

    const imaginiCarousel = [
        "img/retezat-1.jpg",
        "img/retezat-2.jpg",
        "img/retezat-3.jpg",
        "img/retezat-4.jpg",
    ];

    const carouselImagineA = document.getElementById("carouselImagineA");
    const carouselImagineB = document.getElementById("carouselImagineB");

    if (carouselImagineA && carouselImagineB) {
        let indexImagine = 0;
        let imagineActivaEsteA = true;

        setInterval(() => {
            indexImagine++;

            if (indexImagine >= imaginiCarousel.length) {
                indexImagine = 0;
            }

            const imagineActiva = imagineActivaEsteA ? carouselImagineA : carouselImagineB;
            const imagineUrmatoare = imagineActivaEsteA ? carouselImagineB : carouselImagineA;

            imagineUrmatoare.src = imaginiCarousel[indexImagine];

            imagineUrmatoare.classList.remove("opacity-0", "scale-105");
            imagineUrmatoare.classList.add("opacity-100", "scale-100");

            imagineActiva.classList.remove("opacity-100", "scale-100");
            imagineActiva.classList.add("opacity-0", "scale-105");

            imagineActivaEsteA = !imagineActivaEsteA;
        }, 3500);
    }
});