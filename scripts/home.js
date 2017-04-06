$(document).ready(function() {
    $('.cheart').on("click", function() {
        console.log($(this));
        if ($(this).hasClass("fa-heart-o")) {
            $(this).removeClass("fa-heart-o").addClass("fa-heart");
        } else {
            $(this).removeClass("fa-heart").addClass("fa-heart-o");
        }
    });

    $('.pic').on("dblclick", function() {
        console.log($(this).parent().find('.addComments .cheart'));
        if ($('.cheart').hasClass("fa-heart-o")) {
            $(this).find('.pheart').fadeIn(700, function() {
                $(this).fadeOut("slow");
            });
            $(this).parent().find('.addComments .cheart').removeClass("fa-heart-o").addClass("fa-heart");
        }



    });
});
