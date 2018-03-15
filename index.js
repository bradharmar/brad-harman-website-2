var content = ["About placeholder","Audio Placeholder","Video Placeholder", "Code Placeholder"];
var displayContent = 0;

$(".headerRad").on("click", function(){
    displayContent == $("span.radButton").attr("value");
    $("#currentContent").html("<p>"+content[displayContent]+"</p>");
    console.log(displayContent);
})


$("#leftArrow").on("click", function(){
    displayContent--;
    overflowCatch();
    $("#currentContent").html("<p>"+content[displayContent]+"</p>");
})

$("#rightArrow").on("click", function(){
    displayContent++;
    overflowCatch();
    $("#currentContent").html("<p>"+content[displayContent]+"</p>");
})

function overflowCatch(){
    if (displayContent < 0){
        displayContent = 3;
        return;
    }
    else if (displayContent > 3){
        displayContent = 0;
        return;
    }
    else{
        return;
    }
}