$(document).ready(function() {
    // Setting button functionality for nav bar buttons
    $("#home").click(function () {window.location.href="index.html";});
    $("#events").click(function () {window.location.href="events.html";});
    $("#board").click(function () {window.location.href="board.html";});
    $("#gallery").click(function () {window.location.href="gallery.html";});
    $("#gtku").click(function () {window.location.href="gtku.html";});

    let nextSlide = $("#slides img:first-child");

    setInterval(function() {   
        $("#slide").fadeOut(750,
            function() {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                $("#slide").attr("src", nextSlideSource).fadeIn(750);                
            });    // end fadeOut()
    },
    3000);         // end setInterval()

});