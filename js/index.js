$(document).ready(function(){
    $('.scale').hover (function(){
        $(this).css("transform", "scale(1.1)");
        $(this).css("transition", "500ms");
    },
    function() {
        $(this).css("transform", "scale(1)");
    })
})
$(document).ready(function(){
    $('.translate').hover (function(){
        $(this).css("transform", "translateY(-100px)");
        $(this).css("transition", "500ms");
    },
    function() {
        $(this).css("transform", "translateY(0)");
    })
})
$(document).ready(function(){
    $('.transform').hover (function(){
        $(this).css("transform", "translateX(+50px)");
        $(this).css("transition", "500ms");
        $(this).css("cursor", "pointer");
    },
    function() {
        $(this).css("transform", "translateX(0)");
    })
})