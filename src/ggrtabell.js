
var x = 5;
var y = 6;

var correctCount = 0;
var incorrectCount = 0;

function updateValues() {
    x = Math.floor((Math.random() * 10) + 1);;
    y = Math.floor((Math.random() * 10) + 1);;
    $("#valueLabel").text(x + " * " + y + " = ");
    $("#answer").val("");
    $("#answer").focus();
}

function saveResult() {
    var result = "<li>" + x + " * " + " " + y + " = " + (x * y) + "</li>";
    $("#results").prepend(result);
}

function checkAnswer() {
    var answer = $("#answer").val();
    if (answer == x * y) {
        correctCount++;
        saveResult();
        updateValues();
    } else {
        incorrectCount++;
        alert("Hoppsan, fel svar. Försök igen.");
    }
    $("#count").html(correctCount + " rätta svar / " + incorrectCount + " fel svar");
}

$(document).keypress(function(e) {
    if(e.which == 13) {
        checkAnswer();
    }
});