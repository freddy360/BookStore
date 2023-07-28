$(document).ready(function() {
    // Setting button functionality for nav bar buttons
    $("#home").click(function () {window.location.href="index.html";});
    $("#events").click(function () {window.location.href="events.html";});
    $("#board").click(function () {window.location.href="board.html";});
    $("#gallery").click(function () {window.location.href="gallery.html";});
    $("#gtku").click(function () {window.location.href="gtku.html";});

    $.ajax({
        url: "gallery.json",
        dataType: "json",
        success: function(data) {
        // Loop through each photo object and create an img tag for each one
        $.each(data.photos, function(index, photo) {
            // Append the img tag to the photo grid container
            $("#photo-grid").append("<img src=\"" + photo.src + "\">");
        });
        }
    });
});