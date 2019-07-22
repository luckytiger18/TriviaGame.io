

  
//Timer starting at 50 seconds and decrementing to 0
var counter = 5
$("#counter").text("Time Remaining: " + counter);

var timer = setInterval(goDown, 1*1000);

function goDown(){
    counter--;
    $("#counter").text("Time Remaining: " + counter);

    if (counter == 0) {
        $("input[type='submit']").attr("disabled", true);
        clearInterval(timer);
        $("#content").text("Times Up!!")
    }
}
        // var ans = $("input[name='borders']:checked").val();

		// if (ans == 'Oregan'){
		// 	$('#content').text('correct');
		// }else{
		// 	$('#content').text('incorrect')
		// }