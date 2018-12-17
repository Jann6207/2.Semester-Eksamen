$('document').ready(function(){});

let wpJSON;
        let dest = document.querySelector(".data-container");
        let vaerkerFilter = "Alle";
        document.addEventListener("DOMContentLoaded", hentJson);
        async function hentJson() {
            let myJson = await fetch("http://oliverwinfield.dk/kea/kea/lawaetz/wordpress/wp-json/wp/v2/kunstvaerker");
            wpJSON = await myJson.json();
            visJson();
        }
        document.querySelectorAll(".menu-item").forEach(knap => {
            knap.addEventListener("click", filtrering);
        });

        function filtrering() {
            dest.textContent = "";
            vaerkerFilter = this.getAttribute("data-kategori");
            visJson();
            console.log("filtrering");
        }

        function visJson() {
            let myTemplate = document.querySelector(".data-template")

            console.log(wpJSON);
            console.log("visJson");
            wpJSON.forEach(post => {
                if (post.acf.type == vaerkerFilter || vaerkerFilter == "Alle") {
                    console.log("ifstatement")
                    let klon = myTemplate.cloneNode(true).content;
                    klon.querySelector("[data-overskrift]").textContent = post.acf.titel;
                    klon.querySelector("[data-billede]").src = post.acf.billede;
                    klon.querySelector("[data-storrelse]").textContent = "Størrelse: " + post.acf.storrelse;
                    klon.querySelector(".post-container").addEventListener("click", () => {
                        window.location.href = "modal.html?id=" + post.id;
                    });
                    dest.appendChild(klon);
                }
            })
        }

        function goBack() {
            window.history.back();
        }
