$(document).ready(function() {
   $(".title").hover(function() {
     $(this).toggleClass("green");
   },function(){
     $(this).toggleClass("green");
   });
 });


$(document).ready(function() {
    $(".title").click(function () {
        $(this).nextAll(".node").each(function() {
            $(this).toggle("blind");
        });

        $(this).toggleClass("folded");
        return false;
    });
});