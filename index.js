var displayContent = 0;
var tempDisplay = 0;

$(document).ready( function(){
    hashCatch();
    tempDisplay = displayContent;
$(".currentContent").hide();
$("#content" + displayContent).show();
$("#button" + displayContent).css("background-color", "white");

$(window).on("hashchange", function(event){
    $(".contentFocus").animate({ height: 'toggle'}, 'slow', 'swing', function () {
        $("#content" + tempDisplay).hide();
        $("#button" + displayContent).css("background-color", "black");
        hashCatch();
        $("#content" + displayContent).show();
        $("#button" + displayContent).css("background-color", "white");
        tempDisplay = displayContent;
      });
    $(".contentFocus").animate({ height: 'toggle'}, 'slow', 'swing');
})


$("#leftArrow").on("click", function () {
        displayContent--;
        overflowCatch();
        hashReverse();
})

$("#rightArrow").on("click", function () {
        displayContent++;
        overflowCatch();
        hashReverse();
})

})


function overflowCatch() {
    if (displayContent < 1) {
        displayContent = 4;
        return;
    }
    else if (displayContent > 4) {
        displayContent = 1;
        return;
    }
    else {
        return;
    }
}

function hashCatch() {
switch(location.hash){
    case "#About":
    displayContent = 1;
    break;
    case "#Audio":
    displayContent = 2;
    break
    case "#Video":
    displayContent = 3;
    break;
    case "#Code":
    displayContent = 4;
}
}

function hashReverse() {
    switch(displayContent){
    case 1:
    location.replace("#About");
    break;
    case 2:
    location.replace("#Audio");
    break;
    case 3:
    location.replace("#Video");
    break;
    case 4:
    location.replace("#Code");
    }
}