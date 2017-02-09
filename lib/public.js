/**
 * Created by melody on 2017/2/7.
 */
myEvent(window,'load',function(){
    cs_box.set({
        img_path : 'http://demo.lanrenzhijia.com/2014/service1119/images/lanrenzhijia.jpg',	//设置图片路径
        qq : '123456789',	//设置QQ号码
    });
});
$(function() {

    $("img.lazy").lazyload({effect: "fadeIn"});

});
$(document).ready(function () {
    $('#nav_right .question').bind('click',function () {
        $('#cs_box').show();
    })
})
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