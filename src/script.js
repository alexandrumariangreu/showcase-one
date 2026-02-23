
// Selecțăm elementele necesare
const hamburgerEl = document.getElementById("hamburger");
const meniuEl = document.getElementById("meniu");
let meniuDeschis = false;

// todo add image lazy loading (.png placeholder)

// Event listener pentru click pe butonul hamburger
hamburgerEl.addEventListener("click", function() {
    // Obținem referințe la bare
    const spans = hamburgerEl.querySelectorAll('span');

    if(meniuDeschis) { // meniul este deja deschis
        // Transformă X înapoi la hamburger
        spans[0].style.transform = 'rotate(0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0)';

        // Închide meniul
        meniuEl.classList.add("h-0");
        meniuEl.classList.remove("h-64");
    } else { // meniul este închis
        // Transformă hamburger în X
        spans[0].style.transform = 'translateY(10px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-10px) rotate(-45deg)';

        // Deschide meniul
        meniuEl.classList.remove("h-0");
        meniuEl.classList.add("h-64");
    }

    // Inversează starea meniului
    meniuDeschis = !meniuDeschis;
});

// Pentru galeria Fancybox dacă există
if (typeof Fancybox !== 'undefined') {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        // https://fancyapps.com/fancybox/api/options/
    });
}