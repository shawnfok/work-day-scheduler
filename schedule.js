// A $( document ).ready() block
$(document).ready(function () {

    var buttonList = document.querySelectorAll(".saveBtn");
    var textAreaList = document.querySelectorAll(".activity");

    // display the current date and time (Moment.js)
    var now = moment().format('LL');
    $("#currentDay").text(now);

    function timeTracker() {
        var timeInterval = setInterval(function () {
            watchHour = moment().hours();
            calenderTracker(watchHour);
        }, 1000);
    }

    function calenderTracker(h) {
        var currentHour = moment().hours();
        for (var c = 0; c < textAreaList.length; c++) {
            if (h == textAreaList[c].id) {
                textAreaList[c].classList.remove("future");
                textAreaList[c].classList.add("present");
            } else if (h > textAreaList[c].id) {
                textAreaList[c].classList.remove("future");
                textAreaList[c].classList.remove("present");
                textAreaList[c].classList.add("past");
                textAreaList[c].disabled = true;
                buttonList[c].disabled = true;
            } else if (h < textAreaList[c].id) {
                console.log("You are in the future!");
            }
        }
    }

    function saveEvents(n) {
        console.log("I'm clicked");
        var event = textAreaList[n].value.trim();
        console.log(event);
        if (event.length < 1) {
            localStorage.setItem("event" + n, "");
        } else {
            localStorage.setItem("event" + n, event);
            var eventDate = moment().format("MMMM Do YYYY");
            localStorage.setItem("date" + n, eventDate);
        }
    }

    function displayCalStatus() {
        var currentHour = moment().hours();
        for (var c = 0; c < textAreaList.length; c++) {
            if (currentHour == textAreaList[c].id) {
                textAreaList[c].classList.remove("future");
                textAreaList[c].classList.add("present");
            } else if (currentHour > textAreaList[c].id) {
                textAreaList[c].classList.remove("future");
                textAreaList[c].classList.remove("present");
                textAreaList[c].classList.add("past");
                textAreaList[c].disabled = true;
                buttonList[c].disabled = true;
            } else if (currentHour < textAreaList[c].id) {
                console.log("You are in the future!");
            }
        }
    }

    for (var i = 0; i < buttonList; i++) {
        buttonList[i].addEventListener("click", function(e) {
            e.preventDefault();
            console.log(e);
            saveEvents(e.toElement.id);
        });
    }

    timeTracker();
    displayCalStatus();

});
