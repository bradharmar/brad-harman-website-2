var content = ["About placeholder","Audio Placeholder","Video Placeholder", "Code Placeholder"];
var displayContent = 0;

$(".radButton").on("click", function(){
    displayContent = $(this).attr("value");
    $("#currentContent").animate({height:'toggle'},function(){
    $("#currentContent").html("<p>"+content[displayContent]+"</p>");
});
$("#currentContent").animate({height:'toggle'});
})


$("#leftArrow").on("click", function(){
    $("#currentContent").animate({height:'toggle'},function(){
    displayContent--;
    overflowCatch();
    $("#currentContent").html("<p>"+content[displayContent]+"</p>");
    });
    $("#currentContent").animate({height:'toggle'});
})

$("#rightArrow").on("click", function(){
    $("#currentContent").animate({height:'toggle'},function(){
    displayContent++;
    overflowCatch();
    $("#currentContent").html("<p>"+content[displayContent]+"</p>");
});
$("#currentContent").animate({height:'toggle'});
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