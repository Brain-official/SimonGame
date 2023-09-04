var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() *3) + 1 ;
    return randomNumber;
}


var randomChosenColor = buttonColors[nextSequence()]
gamePattern.push(randomChosenColor);
console.log(randomChosenColor)
console.log(gamePattern)



$(document).ready(function() {
    // Function to make the element flash
    function flashElement() {
      $("#" + randomChosenColor).fadeIn(200).fadeOut(200, flashElement);
    }

    // Start the flashing animation
  flashElement();
})



$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor)
    animatePress(userChosenColor)
    
    userClickedPattern.push(userChosenColor)

    //console.log(userClickedPattern)
})




function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
        audio.play()
}


function animatePress(currentColor) {
    $("#"+currentColor).addClass("pressed");

    setInterval (function() {
        $("#"+currentColor).removeClass("pressed")
    }, 1000)
}




$(document).ready(function() {
    // Attach a keydown event handler to the document
    $(document).keydown(function(event) {
        // Check which key was pressed by examining the event object
        var keyPressed = event.key;
        
        // Example: Detect and display the pressed key's code
        console.log("Key pressed: " + keyPressed);

        // You can add your own logic here based on the pressed key
        // For example, check if the Enter key (key code 13) was pressed:
       
    });
});



