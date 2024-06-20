
//$("button").text("don't click me");
//$("button").html("<em>Hey</em>");
//$("h1").click(function(){
    //$("h1").css("color", "purple");
//});
//$("button").keypress(function(){
    //$("h1").css("color", "purple");
//})
$(document).keypress(function(event){
    $("h1").text(event.key);
});
$("h1").on("mouseover", function(){
    $("h1").css("color", "red");
});
$("h1").before("<button>new</button>");