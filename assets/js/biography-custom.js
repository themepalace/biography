jQuery(document).ready(function ($) {

//What happen on window scroll
    function back_to_top(){
        var scrollTop = $(window).scrollTop();
        var offset = 500;
        if (scrollTop < offset) {
            $('.biography-back-to-top').hide();
        } else {
            $('.biography-back-to-top').show();
        }
    }
    $(window).on("scroll", function (e) {
        back_to_top();
    });
    back_to_top();
    $('a[href*=#]').on('click', function(event){
        if ($(this.hash).length){
            event.preventDefault();
            $("html, body").stop().animate({scrollTop: $(this.hash).offset().top - 70}, 2e3, "easeInOutExpo");
        }
    });
});