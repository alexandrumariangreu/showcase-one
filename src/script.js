
// Selecțăm elementele necesare
const hamburgerEl = document.getElementById("hamburger");
const meniuEl = document.getElementById("meniu");
let meniuDeschis = false;

// todo add image lazy loading (.png placeholder)

// Event listener pentru click pe butonul hamburger
hamburgerEl.addEventListener("click", function () {
    // Obținem referințe la bare
    const spans = hamburgerEl.querySelectorAll("span");

    // Ne asigurăm că rotirea se face frumos din centru
    spans.forEach((s) => {
        s.style.transformOrigin = "center";
    });

    // Calculăm distanța reală dintre bara 1 și bara 2 (și o folosim ca offset)
    // Funcționează indiferent de w/h/mb/gap, deci X-ul rămâne perfect și după resize.
    const offset = spans[1].offsetTop - spans[0].offsetTop;

    if (meniuDeschis) {
        // Transformă X înapoi la hamburger
        spans[0].style.transform = "";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "";

        // Închide meniul
        meniuEl.classList.add("h-0");
        meniuEl.classList.remove("h-64");
    } else {
        // Transformă hamburger în X (folosind offset-ul real)
        spans[0].style.transform = `translateY(${offset}px) rotate(45deg)`;
        spans[1].style.opacity = "0";
        spans[2].style.transform = `translateY(${-offset}px) rotate(-45deg)`;

        // Deschide meniul
        meniuEl.classList.remove("h-0");
        meniuEl.classList.add("h-64");
    }

    // Inversează starea meniului
    meniuDeschis = !meniuDeschis;
});

// Pentru galeria Fancybox dacă există
if (typeof Fancybox !== "undefined") {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        // https://fancyapps.com/fancybox/api/options/
    });
}