$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    $(".menubutton").on("click", trykPaaMenubutton);
}

function trykPaaMenubutton() {
    console.log("Tryk paa menubutton");
    $(".navbar_mobile").slideToggle(".navbar_mobile");
    $(".menubutton").toggleClass("kryds");




}
