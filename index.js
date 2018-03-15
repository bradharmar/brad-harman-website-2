var content = ["About placeholder","Audio Placeholder","Video Placeholder", "Code Placeholder"];
var displayContent = 0;

$(".headerRad").on("click", function(){
    displayContent == $(this).attr("value");
    $("#currentContent").html(content[displayContent]);
    console.log(displayContent);
})


$("#leftArrow").on("click", function(){
    displayContent--;
    overflowCatch();
})

$("#rightArrow").on("click", function(){
    displayContent++;
    overflowCatch();
})

function overflowCatch(){
    if (displayContent < 0){
        displayContent = 4;
        return;
    }
    else if (displayContent > 4){
        displayContent = 0;
        return;
    }
    else{
        return;
    }
}