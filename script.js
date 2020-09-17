// make function available after document is loaded
$(document).ready(function () {

    /////////// PART 1: ESTABLISHING FRAMEWORK ///////////

    // displays current day
    $("#currentDay").text(moment().format("dddd, LLL"));

    // hours variable array
    var hours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

    // create time rows
    for (i = 0; i < hours.length; i++) {
        console.log(hours[i]);
        // assign column 1 - hour
        $(`<div class="col-2 time-block"></div>`).text(hours[i]).appendTo(".row");
        // assign column 2 - activity
        $(`<textarea class="col-8 note-input" id="input-${i}"></textarea>`).attr("placeholder", "Your activity").appendTo(".row");
        // assign column 3 - save button
        $(`<button class="col-2 btn saveBtn" id="hour${i}"></button>`).text("Save").appendTo(".row");
    }

    // clear button
    $(`<button class="=btn btn-secondary clear"></button>`)
        .text("Reset").appendTo(".clear");

    $(".clear").on("click", function (event) {
        event.preventDefault();
        // empty local storage    
        localStorage.clear();
        // reload page    
        location.reload();
    });

    /////////// PART 2: CLASSIFYING TIME STATUS ///////////

    // first capture current hour
    var timeNow = moment().hours();
    // then assign past, present, or future classes
    if (timeNow > 9) {
        $("#input-0").addClass("past");
    } else if (timeNow >= 9 && timeNow < 10) {
        $("#input-0").addClass("present");
    } else if (timeNow < 9) {
        $("#input-0").addClass("future");
    }

    if (timeNow > 10) {
        $("#input-1").addClass("past");
    } else if (timeNow >= 10 && timeNow < 11) {
        $("#input-1").addClass("present");
    } else if (timeNow < 10) {
        $("#input-1").addClass("future");
    }

    if (timeNow > 11) {
        $("#input-2").addClass("past");
    } else if (timeNow >= 11 && timeNow < 12) {
        $("#input-2").addClass("present");
    } else if (timeNow < 11) {
        $("#input-2").addClass("future");
    }

    if (timeNow > 12) {
        $("#input-3").addClass("past");
    } else if (timeNow >= 12 && timeNow < 13) {
        $("#input-3").addClass("present");
    } else if (timeNow < 12) {
        $("#input-3").addClass("future");
    }

    if (timeNow > 13) {
        $("#input-4").addClass("past");
    } else if (timeNow >= 13 && timeNow < 14) {
        $("#input-4").addClass("present");
    } else if (timeNow < 13) {
        $("#input-4").addClass("future");
    }

    if (timeNow > 14) {
        $("#input-5").addClass("past");
    } else if (timeNow >= 14 && timeNow < 15) {
        $("#input-5").addClass("present");
    } else if (timeNow < 14) {
        $("#input-5").addClass("future");
    }

    if (timeNow > 15) {
        $("#input-6").addClass("past");
    } else if (timeNow >= 15 && timeNow < 16) {
        $("#input-6").addClass("present");
    } else if (timeNow < 15) {
        $("#input-6").addClass("future");
    }

    if (timeNow > 16) {
        $("#input-7").addClass("past");
    } else if (timeNow >= 16 && timeNow < 17) {
        $("#input-7").addClass("present");
    } else if (timeNow < 16) {
        $("#input-7").addClass("future");
    }

    if (timeNow > 17) {
        $("#input-8").addClass("past");
    } else if (timeNow >= 17 && timeNow < 18) {
        $("#input-8").addClass("present");
    } else if (timeNow < 17) {
        $("#input-8").addClass("future");
    }

    /////////// PART 3: SAVING ACTIVITY ///////////

    // save hourly activity to local storage accordingly
    // 9am
    var row9amInput = document.querySelector("#input-0");
    var row9amSaveBtn = document.querySelector("#hour0");
    // display previous input
    row9amInput.value = localStorage.getItem("9am-saved");
    // save button clicks and stores new user input
    hour0.addEventListener("click", updateOutput1);
    // save user input to local storage
    function updateOutput1() {
        localStorage.setItem("9am-saved", row9amInput.value);
    }

    // 10am
    var row10amInput = document.querySelector("#input-1");
    var row10amSaveBtn = document.querySelector("#hour1");
    // display previous input
    row10amInput.value = localStorage.getItem("10am-saved");
    // save button clicks and stores new user input
    hour1.addEventListener("click", userDataStore1);
    // save user input to local storage
    function userDataStore1() {
        localStorage.setItem("10am-saved", row10amInput.value);
    }

    // 11am
    var row11amInput = document.querySelector("#input-2");
    var row11amSaveBtn = document.querySelector("#hour2");
    // display previous input
    row11amInput.value = localStorage.getItem("11am-saved");
    // save button clicks and stores new user input
    hour2.addEventListener("click", userDataStore2);
    // save user input to local storage
    function userDataStore2() {
        localStorage.setItem("11am-saved", row11amInput.value);
    }

    // 12pm
    var row12pmInput = document.querySelector("#input-3");
    var row12pmSaveBtn = document.querySelector("#hour3");
    // display previous input
    row12pmInput.value = localStorage.getItem("12pm-saved");
    // save button clicks and stores new user input
    hour3.addEventListener("click", userDataStore3);
    // save user input to local storage
    function userDataStore3() {
        localStorage.setItem("12pm-saved", row12pmInput.value);
    }

    // 1pm
    var row1pmInput = document.querySelector("#input-4");
    var row1pmSaveBtn = document.querySelector("#hour4");
    // display previous input
    row1pmInput.value = localStorage.getItem("1pm-saved");
    // save button clicks and stores new user input
    hour4.addEventListener("click", updateOutput4);
    // save user input to local storage
    function updateOutput4() {
        localStorage.setItem("1pm-saved", row1pmInput.value);
    }

    // 2pm
    var row2pmInput = document.querySelector("#input-5");
    var row2pmSaveBtn = document.querySelector("#hour5");
    // display previous input
    row2pmInput.value = localStorage.getItem("2pm-saved");
    // save button clicks and stores new user input
    hour5.addEventListener("click", updateOutput5);
    // save user input to local storage
    function updateOutput5() {
        localStorage.setItem("2pm-saved", row2pmInput.value);
    }

    // 3pm
    var row3pmInput = document.querySelector("#input-6");
    var row3pmSaveBtn = document.querySelector("#hour6");
    // display previous input
    row3pmInput.value = localStorage.getItem("3pm-saved");
    // save button clicks and stores new user input
    hour6.addEventListener("click", updateOutput6);
    // save user input to local storage
    function updateOutput6() {
        localStorage.setItem("3pm-saved", row3pmInput.value);
    }

    // 4pm
    var row4pmInput = document.querySelector("#input-7");
    var row4pmSaveBtn = document.querySelector("#hour7");
    // display previous input
    row4pmInput.value = localStorage.getItem("4pm-saved");
    // save button clicks and stores new user input
    hour7.addEventListener("click", updateOutput7);
    // save user input to local storage
    function updateOutput7() {
        localStorage.setItem("4pm-saved", row4pmInput.value);
    }

    // 5pm
    var row5pmInput = document.querySelector("#input-8");
    var row5pmSaveBtn = document.querySelector("#hour8");
    // display previous input
    row5pmInput.value = localStorage.getItem("5pm-saved");
    // save button clicks and stores new user input
    hour8.addEventListener("click", updateOutput8);
    // save user input to local storage
    function updateOutput8() {
        localStorage.setItem("5pm-saved", row5pmInput.value);
    }
});
