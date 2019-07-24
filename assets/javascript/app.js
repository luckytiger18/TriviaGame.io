var counter;
var timer;
var playerCorrectAnswers;
var playerIncorrectAnswers;

$(document).ready(function () {
    $("#quiz").hide();
});

$("#startButton").on("click", function () {
    counter = 20;
    timer = setInterval(goDown, 1000);
    $("#startButton").remove();
    $("#quiz").show();
});

function goDown() {
    counter--;
    $("#counterValue").text(counter);

    if (counter == 0) {
        $("input[type='submit']").attr("disabled", true);
        clearInterval(timer);
        $("#content").text("Times Up!!")
    }
}
//Radio Button 
$("input[type='submit']").on('click', function () {
    var ansOne = $("input[name='borders']:checked").val();
    if (ansOne == "oregon") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
    var ansTwo = $("input[name='centralValley']:checked").val();
    if (ansTwo == "centralValley") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
    var ansThree = $("input[name='capital']:checked").val();
    if (ansThree == "sacramento") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
    var ansFour = $("input[name='stateFlower']:checked").val();
    if (ansFour == "goldenPoppy") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
    var ansFive = $("input[name='goldenState']:checked").val();
    if (ansFive == "golden") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
    event.preventDefault();
});
    