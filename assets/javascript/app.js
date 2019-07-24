var counter = 120;
var timer;
var playerCorrectAnswers = 0;
var playerIncorrectAnswers = 0;

function goDown() {
    counter--;
    $("#counterValue").text(counter);

    if (counter == 0) {
        $("input[type='submit']").attr("disabled", true);
        clearInterval(timer);
        $("#content").text("Times Up!!");
        evaluateGame();
        endGame();
    }
}
function endGame() {
    $("#quiz").hide();
    clearInterval(timer);
    $("#correctResults").text("Correct: " + playerCorrectAnswers)
    $("#incorrectResults").text("Incorrect: " + playerIncorrectAnswers)
    $("#results").show();
    $("#counter").hide();
    $("#counterValue").hide();
}

function evaluateGame() {
    var ansOne = $("input[name='borders']:checked").val();
    if (ansOne == "oregon") {
        console.log("correct")
        playerCorrectAnswers++;
    } else {
        playerIncorrectAnswers++;
        console.log("incorrect")
    }
    var ansTwo = $("input[name='centralValley']:checked").val();
    if (ansTwo == "centralValley") {
        console.log("correct")
        playerCorrectAnswers++;
    } else {
        console.log("incorrect")
        playerIncorrectAnswers++;
    }
    var ansThree = $("input[name='capital']:checked").val();
    if (ansThree == "sacramento") {
        console.log("correct")
        playerCorrectAnswers++;
    } else {
        console.log("incorrect")
        playerIncorrectAnswers++;
    }
    var ansFour = $("input[name='stateFlower']:checked").val();
    if (ansFour == "goldenPoppy") {
        console.log("correct")
        playerCorrectAnswers++;
    } else {
        console.log("incorrect")
        playerIncorrectAnswers++;
    }
    var ansFive = $("input[name='goldenState']:checked").val();
    if (ansFive == "golden") {
        console.log("correct")
        playerCorrectAnswers++;
    } else {
        console.log("incorrect")
        playerIncorrectAnswers++;
    }
}
$(document).ready(function () {
    $("#quiz").hide();
    $("#results").hide();
    $("#counter").hide();
    $("#counterValue").hide();
});

$("#startButton").on("click", function () {
    goDown();
    timer = setInterval(goDown, 1000);
    $("#startButton").remove();
    $("#quiz").show();
    $("#counter").show();
    $("#counterValue").show();
});

//Radio Button 
$("#finishQuiz").on('click', function () {
    evaluateGame();

    console.log(playerCorrectAnswers)
    console.log(playerIncorrectAnswers)
    endGame();

    event.preventDefault();
});


