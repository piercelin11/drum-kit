$(document).keydown(function(e){
    let keyCode = e.keyCode;
    let audio = $("audio[data-key='" + keyCode + "']");
    let keyPressed = $(".key[data-key='" + keyCode + "']");

    if(audio.length > 0 && keyPressed.length > 0){
        keyPressed.addClass("playing");
        audio[0].currentTime = 0;
        audio[0].play();
    }

});

$(".key").click(function(){
    let keyCode = $(this).attr("data-key");
    let audio = $("audio[data-key='" + keyCode + "']");
    let keyPressed = $(".key[data-key='" + keyCode + "']");

    if(audio.length > 0 && keyPressed.length > 0){
        keyPressed.addClass("playing");
        audio[0].currentTime = 0;
        audio[0].play();
        setTimeout(function(){
            keyPressed.removeClass("playing");
        }, 100);
    }

});

$(document).keyup(function(e){
    let keyCode = e.keyCode;
    let keyPressed = $(".key[data-key='" + keyCode + "']");

    if(keyPressed.length > 0){
        keyPressed.removeClass("playing");
    }
});