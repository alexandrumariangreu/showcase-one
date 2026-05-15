
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const meniu = document.getElementById("meniu");
    const menuOverlay = document.getElementById("menuOverlay");
    const inchideMeniu = document.getElementById("inchideMeniu");
    const hamburgerLines = hamburger ? hamburger.querySelectorAll("span") : [];

    function deschideMeniul() {
        if (!hamburger || !meniu || !menuOverlay) {
            return;
        }

        meniu.classList.remove("-translate-y-full", "opacity-0", "pointer-events-none");
        meniu.classList.add("translate-y-0", "opacity-100", "pointer-events-auto");

        menuOverlay.classList.remove("hidden");

        hamburger.setAttribute("aria-expanded", "true");

        if (hamburgerLines.length === 3) {
            hamburgerLines[0].classList.add("translate-y-4", "rotate-45");
            hamburgerLines[1].classList.add("opacity-0");
            hamburgerLines[2].classList.add("-translate-y-4", "-rotate-45");
        }
    }

    function inchideMeniul() {
        if (!hamburger || !meniu || !menuOverlay) {
            return;
        }

        meniu.classList.add("-translate-y-full", "opacity-0", "pointer-events-none");
        meniu.classList.remove("translate-y-0", "opacity-100", "pointer-events-auto");

        menuOverlay.classList.add("hidden");

        hamburger.setAttribute("aria-expanded", "false");

        if (hamburgerLines.length === 3) {
            hamburgerLines[0].classList.remove("translate-y-4", "rotate-45");
            hamburgerLines[1].classList.remove("opacity-0");
            hamburgerLines[2].classList.remove("-translate-y-4", "-rotate-45");
        }
    }

    if (hamburger && meniu && menuOverlay) {
        hamburger.addEventListener("click", () => {
            const esteDeschis = hamburger.getAttribute("aria-expanded") === "true";

            if (esteDeschis) {
                inchideMeniul();
            } else {
                deschideMeniul();
            }
        });

        menuOverlay.addEventListener("click", inchideMeniul);
    }

    if (inchideMeniu) {
        inchideMeniu.addEventListener("click", inchideMeniul);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            inchideMeniul();
        }
    });

    if (typeof Fancybox !== "undefined") {
        Fancybox.bind("[data-fancybox]", {});
    }

    const cabanaButaImagini = [
        "img/cabana-buta-retezat-exterior-01.avif",
        "img/amenajari-02.avif",
        "img/amenajari-03.avif",
        "img/amenajari-04.avif"
    ];

    const cabanaButaA = document.getElementById("cabanaButaCarouselA");
    const cabanaButaB = document.getElementById("cabanaButaCarouselB");

    if (cabanaButaA && cabanaButaB) {
        let cabanaButaIndex = 0;
        let cabanaButaEsteAActiva = true;

        setInterval(() => {
            cabanaButaIndex = (cabanaButaIndex + 1) % cabanaButaImagini.length;

            if (cabanaButaEsteAActiva) {
                cabanaButaB.src = cabanaButaImagini[cabanaButaIndex];

                if (cabanaButaB.parentElement) {
                    cabanaButaB.parentElement.href = cabanaButaImagini[cabanaButaIndex];
                }

                cabanaButaB.classList.remove("opacity-0", "scale-105");
                cabanaButaB.classList.add("opacity-100", "scale-100");

                cabanaButaA.classList.remove("opacity-100", "scale-100");
                cabanaButaA.classList.add("opacity-0", "scale-105");
            } else {
                cabanaButaA.src = cabanaButaImagini[cabanaButaIndex];

                if (cabanaButaA.parentElement) {
                    cabanaButaA.parentElement.href = cabanaButaImagini[cabanaButaIndex];
                }

                cabanaButaA.classList.remove("opacity-0", "scale-105");
                cabanaButaA.classList.add("opacity-100", "scale-100");

                cabanaButaB.classList.remove("opacity-100", "scale-100");
                cabanaButaB.classList.add("opacity-0", "scale-105");
            }

            cabanaButaEsteAActiva = !cabanaButaEsteAActiva;
        }, 3500);
    }
});