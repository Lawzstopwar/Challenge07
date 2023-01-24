setInterval(
    function(){
        $("#currentDay").text(moment().format("DDD MMM, YYYY hh:mm:ss"))
    
    },1000)

    setInterval(
        function () {
            $("#currentDay").text(moment().format("DDD MMM, YYYY hh:mm:ss"))
    
        }, 1000)


{/* 
<div class="time-block row">
    <h2 class="hour">9AM</h2>
    <textarea class="description"></textarea>
    <button class="saveBtn">Save</button>
</div> 
*/}

var currentHour = parseInt( moment().format("H"));
// var currentHour = 9;

// var rowDiv = document.createElement("div")

function createTimeBlock(timeText, timeNum) {
    var rowDiv = $("<div>");
    rowDiv.addClass("time-block");
    rowDiv.addClass("row");

    var hourH2 = $("<h2>");
    hourH2.addClass("hour");
    hourH2.text(timeText)

    var textArea = $("<textarea>");
    textArea.addClass("description");
    textArea.val(localStorage.getItem(timeText))

    if(timeNum > currentHour) {
        textArea.addClass("future")
    } else if(timeNum < currentHour) {
        textArea.addClass("past")
    } else {
        textArea.addClass("present")
    }


    var saveBtn = $("<button>");
    saveBtn.addClass("saveBtn");
    saveBtn.text("Save");
    saveBtn.on("click", function () {
        var targetTextarea = $(this).siblings("textarea")
        var textToSave = targetTextarea.val();

        console.log(textToSave);

        localStorage.setItem(timeText, textToSave)
    })

    rowDiv.append(hourH2, textArea, saveBtn);

    $(".container").append(rowDiv)
}

var timesText = [
    "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"
]

var timesNum = [
    9, 10, 11, 12, 13, 14, 15, 16, 17
]

for(i = 0; i < timesText.length; i++) {
    createTimeBlock(timesText[i], timesNum[i])
}
