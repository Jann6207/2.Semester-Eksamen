$('document').ready(function () {
    console.log("Page loadet")
});



let wpJSON = [];
let dest = document.querySelector(".data-container");
let vaerkerFilter = "Alle";
document.addEventListener("DOMContentLoaded", start);

function start() {
    hentJson();
    document.querySelectorAll(".menu-item").forEach(knap => {
        knap.addEventListener("click", filtrering);
    });

}

async function hentJson() {
    let myJson = await fetch("http://oliverwinfield.dk/kea/kea/lawaetz/wordpress/wp-json/wp/v2/kunstvaerker");
    wpJSON = await myJson.json();
    shuffle(wpJSON);
    visJson();

}

function filtrering() {
    dest.textContent = "";
    vaerkerFilter = this.getAttribute("data-kategori");
    visJson();
    console.log("filtrering");
}

function visJson() {
    let myTemplate = document.querySelector(".data-template")

    console.log("visJson");

    if (vaerkerFilter == "Alle") {
        shuffle(wpJSON);
    }

    if (vaerkerFilter == "Str") {
        str(wpJSON);
    }

    wpJSON.forEach(post => {
        if (vaerkerFilter == "Nyeste") {

            if (post.acf.type == vaerkerFilter) {


                console.log("ifstatement")
                let klon = myTemplate.cloneNode(true).content;
                klon.querySelector("[data-overskrift]").textContent = post.acf.titel;
                klon.querySelector("[data-billede]").src = post.acf.billede;
                klon.querySelector("[data-storrelse]").textContent = "Størrelse: " + post.acf.storrelse;
                klon.querySelector(".post-container").addEventListener("click", () => {
                    visModal(post);
                });
                dest.appendChild(klon);
            }
        } else {
            console.log("elsestatement")
            let klon = myTemplate.cloneNode(true).content;
            klon.querySelector("[data-overskrift]").textContent = post.acf.titel;
            klon.querySelector("[data-billede]").src = post.acf.billede;
            klon.querySelector("[data-storrelse]").textContent = "Størrelse: " + post.acf.storrelse;
            klon.querySelector(".post-container").addEventListener("click", () => {
                visModal(post);
            });
            dest.appendChild(klon);

        }
    })
}

function visModal(post) {
    modal.classList.add("vis");
    modal.querySelector(".modal-navn").textContent = post.acf.titel;
    modal.querySelector(".modal-billede").src = post.acf.billede;
    modal.querySelector("[data-storrelse]").textContent = "Størrelse: " + post.acf.storrelse;
    modal.querySelector("[data-digt]").textContent = post.acf.digt;

    modal.querySelector("button").addEventListener("click", skjulmodal);

}

function skjulmodal() {
    modal.classList.remove("vis");
}

function shuffle(array) {
    array.sort(() => {
        return 0.5 - Math.random()
    });
}

function str() {
    wpJSON.sort(function (a, b) {
        return a.acf.str_id - b.acf.str_id;
    });
}
