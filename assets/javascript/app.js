


//Timer starting at 50 seconds and decrementing to 0
var counter = 5
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
var ans = $("input[name='borders']:checked").val();
console.log(ans)
if (ans == 'Oregon') {
    $('#content').text('correct');
} else {
    $('#content').text('incorrect')
}