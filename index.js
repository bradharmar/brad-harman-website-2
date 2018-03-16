var content = ["About placeholder","Audio Placeholder","Video Placeholder", "Code Placeholder"];
var displayContent = 0;

$(".radButton").on("click", function(){
    displayContent = $(this).attr("value");
    $("#currentContent").fadeToggle("Slow",function(){
    $("#currentContent").html("<p>"+content[displayContent]+"</p>");
});
$("#currentContent").fadeToggle("slow");
})


$("#leftArrow").on("click", function(){
    $("#currentContent").fadeToggle("Slow",function(){
    displayContent--;
    overflowCatch();
    $("#currentContent").html("<p>"+content[displayContent]+"</p>");
    });
    $("#currentContent").fadeToggle("slow");
})

$("#rightArrow").on("click", function(){
    $("#currentContent").fadeToggle("Slow",function(){
    displayContent++;
    overflowCatch();
    $("#currentContent").html("<p>"+content[displayContent]+"</p>");
});
$("#currentContent").fadeToggle("slow");
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