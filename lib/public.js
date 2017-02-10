/**
 * Created by melody on 2017/2/7.
 */
$(function() {

    $("img.lazy").lazyload({effect: "fadeIn"});

});
$(document).ready(function () {
    $('#nav_right .question').bind('click',function () {
        $('#cs_box').show();
    })
})
$(function (){
    $("[data-toggle='popover']").popover();
});
i=1;
$(function(){
    $("#display").click(function(){
        if(i%2!=0){
            $("#show").show();
            $("#display").html("收起");
            i++;
        }else{
            $("#show").hide();
            $("#display").html("展开");
            i++;
        }
    });
})
