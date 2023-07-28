$(document).ready(function() {
    // Setting button functionality for nav bar buttons
    $("#home").click(function () {window.location.href="index.html";});
    $("#events").click(function () {window.location.href="events.html";});
    $("#board").click(function () {window.location.href="board.html";});
    $("#gallery").click(function () {window.location.href="gallery.html";});
    $("#gtku").click(function () {window.location.href="gtku.html";});
    
    $('#calendar').evoCalendar({
        theme: 'Royal Navy',
        todayHighlight: true,
        sidebarToggler: true,
        eventListToggler: true,
        canAddEvent: false,
        calendarEvents: [
            { name: "New Year", date: "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)", type: "holiday", everyYear: true },
            { name: "Valentine's Day", date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)", type: "holiday", everyYear: true },
            { name: "Patient #1", date: "February/3/2020", type: "event" },
            { name: "Patient #3", date: "February/3/2020", type: "event" },
            { name: "Patient #4", date: "February/3/2020", type: "event" },
            { name: "Holiday #3", date: "February/3/2020", type: "holiday" },
            { name: "Birthday #2", date: "February/3/2020", type: "birthday" },
            { name: "Author's Birthday", date: "February/15/2020", type: "birthday", everyYear: true },
            { name: "Holiday #4", date: "February/15/2020", type: "event" },
            { name: "Patient #2", date: "February/8/2020", type: "event" },
            { name: "Leap day", date: "February/29/2020", type: "holiday", everyYear: true }
        ],
        onSelectDate: function() {
            // console.log('onSelectDate!')
        },
        onAddEvent: function() {
            console.log('onAddEvent!');
        }
    });
});