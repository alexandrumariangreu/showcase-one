// 1. selectam elementele necesare (hamburger si div meniu)
// 2. definim variabila boolean care tine cont de starea meniului (deschis/inchis)
// 3. construim event-listener pentru apasare hamburger
// 4. construim conditionalul care tine cont de boolean
// 5. construim functii care ascund/arata meniul, pe care le folosim in conditional

const hamburgerEl = document.getElementById("hamburger");
const meniuEl = document.getElementById("meniu");

let meniuDeschis = false;

hamburgerEl.addEventListener("click", function() {
    if(meniuDeschis === true) { // meniul este deja deschis
        inchideMeniul();
    } else { // meniul este inchis
        deschideMeniul();
    }

    meniuDeschis = !meniuDeschis; // inverseaza valoarea existenta
});

function inchideMeniul() {
    meniuEl.classList.add("h-0");
    meniuEl.classList.remove("h-48");
}

function deschideMeniul() {
    meniuEl.classList.remove("h-0");
    meniuEl.classList.add("h-48");
}