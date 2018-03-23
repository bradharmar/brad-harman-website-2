var displayContent = 0;

$(document).ready( function(){
$(".currentContent").hide();
$("#content0").show();

$(".radButton").on("click", function () {
    var tempButton = $(this).attr("value");
    $(".contentFocus").animate({ height: 'toggle'}, "slow", "swing", function () {
        $("#content" + displayContent).hide();
        displayContent = tempButton;
        $("#content" + displayContent).show();
    });
    $(".contentFocus").animate({ height: 'toggle' }, "slow", "swing");
})


$("#leftArrow").on("click", function () {
    $(".contentFocus").animate({ height: 'toggle'}, "slow", "swing", function () {
        $("#content" + displayContent).hide();
        displayContent--;
        overflowCatch();
        $("#content" + displayContent).show();
    });
    $(".contentFocus").animate({ height: 'toggle'}, "slow", "swing");
})

$("#rightArrow").on("click", function () {
    $(".contentFocus").animate({ height: 'toggle'}, "slow", "swing", function () {
        $("#content" + displayContent).hide();
        displayContent++;
        overflowCatch();
        $("#content" + displayContent).show();
    });
    $(".contentFocus").animate({ height: 'toggle'}, "slow", "swing");
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