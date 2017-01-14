/**
 * Created by melody on 2017/1/4.
 */
$(document).ready(function () {
    $("#topnav li a").bind('click',function () {
        if($(this).has("current")){
            $(this).addClass("current").parent("li").siblings("li").find("a").removeClass("current")
        }
    })
    $("#nav_right a").bind('click',function () {
        if($(this).has("current")){
            $(this).addClass("current").siblings("a").removeClass("current");
        }
    })
    $("#out span").bind('click',function () {
        if($(this).has("current")){
            $(this).addClass("current").siblings("span").removeClass("current");
        }
        if($(".mk img").eq(0).hasClass("hide")){
            $(".mk img").eq(0).addClass("show").removeClass("hide");
            $(".mk img").eq(1).addClass("hide").removeClass("show");
        }
        if($(".mk1 img").eq(0).hasClass("hide")){
            $(".mk1 img").eq(0).addClass("show").removeClass("hide");
            $(".mk1 img").eq(1).addClass("hide").removeClass("show");
        }
        if($(".mk2 img").eq(0).hasClass("hide")){
            $(".mk2 img").eq(0).addClass("show").removeClass("hide");
            $(".mk2 img").eq(1).addClass("hide").removeClass("show");
        }
        if($(".mk3 img").eq(0).hasClass("hide")){
            $(".mk3 img").eq(0).addClass("show").removeClass("hide");
            $(".mk3 img").eq(1).addClass("hide").removeClass("show");
        }
        if($(".mk4 img").eq(0).hasClass("hide")){
            $(".mk4 img").eq(0).addClass("show").removeClass("hide");
            $(".mk4 img").eq(1).addClass("hide").removeClass("show");
        }
        if($(".mk5 img").eq(0).hasClass("hide")){
            $(".mk5 img").eq(0).addClass("show").removeClass("hide");
            $(".mk5 img").eq(1).addClass("hide").removeClass("show");
        }
        if($(".mk6 img").eq(0).hasClass("hide")){
            $(".mk6 img").eq(0).addClass("show").removeClass("hide");
            $(".mk6 img").eq(1).addClass("hide").removeClass("show");
        }
        if($(".mk7 img").eq(0).hasClass("hide")){
            $(".mk7 img").eq(0).addClass("show").removeClass("hide");
            $(".mk7 img").eq(1).addClass("hide").removeClass("show");
        }

        $(this).find("img").eq(0).addClass("hide").removeClass("show");
        $(this).find("img").eq(1).addClass("show").removeClass("hide");
        // console.log($(this).siblings().find("img").eq(0).hasClass("hide"));
        // if($(this).siblings().find("img").eq(0).hasClass("hide")){
        //     $(this).siblings().find("img").eq(0).addClass("hide").removeClass("show");
        // }
        // if($(this).siblings().find("img").eq(1).hasClass("show")) {
        //     $(this).siblings().find("img").eq(1).addClass("show").removeClass("hide");
        // }

    })
})







