var displayContent = 0;
var tempDisplay = 0;

$(document).ready( function(){
    hashCatch();
$(".currentContent").hide();
$("#content" + displayContent).show();

$(window).on("hashchange", function(event){
    $(".contentFocus").animate({ height: 'toggle'}, 'slow', 'swing', function () {
        tempDisplay = displayContent;
        $("#content" + tempDisplay).hide();
        hashCatch();
        $("#content" + displayContent).show();
      });
    $(".contentFocus").animate({ height: 'toggle'}, 'slow', 'swing');
})


$("#leftArrow").on("click", function () {
    tempDisplay = displayContent;
        displayContent--;
        overflowCatch();
        hashReverse();
})

$("#rightArrow").on("click", function () {
    tempDisplay = displayContent;
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