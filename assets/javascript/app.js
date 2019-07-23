//When page loads, the first thing you will see is the start button


$(document).ready(function () {
    $("#start").on("click", function (counter) {
    });



    //Timer starting at 50 seconds and decrementing to 0
    var counter = 20
    $("#counterValue").text(counter);

    var timer = setInterval(goDown, 1000);

    function goDown() {
        counter--;
        $("#counterValue").text(counter);

        if (counter == 0) {
            $("input[type='submit']").attr("disabled", true);
            clearInterval(timer);
            $("#content").text("Times Up!!")
        }
    }
});
//Radio Button 
$("input[type='submit']").on('click', function () {
    var ansOne = $("input[name='borders']:checked").val();
    if (ansOne == "oregon") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
});
$("input[type='submit']").on('click', function () {
    var ansTwo = $("input[name='centralValley']:checked").val();
    if (ansTwo == "centralValley") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
});

$("input[type='submit']").on('click', function () {
    var ansThree = $("input[name='capital']:checked").val();
    if (ansThree == "sacramento") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
});

$("input[type='submit']").on('click', function () {
    var ansFour = $("input[name='stateFlower']:checked").val();
    if (ansFour == "goldenPoppy") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
});
$("input[type='submit']").on('click', function () {
    var ansFive = $("input[name='goldenState']:checked").val();
    if (ansFive == "golden") {
        console.log("correct")
    } else {
        console.log("incorrect")
    }
    event.preventDefault();
});