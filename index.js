function playSound(key){

    switch(key){
        case "a" :
            var clap = new Audio("sounds/clap.wav");
            clap.play();
        break;

        case "s" :
            var hihat = new Audio("sounds/hihat.wav");
            hihat.play();
        break;

        case "d" :
            var kick = new Audio("sounds/kick.wav");
            kick.play();
        break;

        case "f" :
            var openhat = new Audio("sounds/openhat.wav");
            openhat.play();
        break;

        case "g" :
            var boom = new Audio("sounds/boom.wav");
            boom.play();
        break;

        case "h" :
            var ride = new Audio("sounds/ride.wav");
            ride.play();
        break;

        case "j" :
            var snare = new Audio("sounds/snare.wav");
            snare.play();
        break;

        case "k" :
            var tom = new Audio("sounds/tom.wav");
            tom.play();
        break;

        case "l" :
            var tink = new Audio("sounds/tink.wav");
            tink.play();
        break;
    }
}


$(document).keydown(function(e){
    let keyCode = e.key;
    let keyPressed = $(".key[data-key='" + keyCode + "']");

    if(keyPressed.length > 0){
        keyPressed.addClass("playing");
        playSound(keyCode);
    }

});

$(".key").click(function(){
    let keyCode = $(this).attr("data-key");
    let keyPressed = $(".key[data-key='" + keyCode + "']");

    if(audio.length > 0 && keyPressed.length > 0){
        keyPressed.addClass("playing");
        playSound(keyCode);
        setTimeout(function(){
            keyPressed.removeClass("playing");
        }, 100);
    }

});

$(document).keyup(function(e){
    let keyCode = e.key;
    let keyPressed = $(".key[data-key='" + keyCode + "']");

    if(keyPressed.length > 0){
        keyPressed.removeClass("playing");
    }
});

