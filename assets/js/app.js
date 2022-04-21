
// $(document).ready(function(){
//     alert(jQuery.fn.jquery);
//     });/* проверка работы app.js */

$(function() {
    
    var header = $("#header"),
        introH = $("#intro").innerHeight() -1,
        scrollOffset = $(window).scrollTop();


        /* fixed header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
       
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll() {

        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }

    // /* скрыть шапку при прокруте после ?px */

    //     var lastScrollTop = 0;
    // $(window).scroll(function(event) {
    //     var st = $(this).scrollTop();
    // if (st > lastScrollTop){
    //     // код для прокрутки вниз
    //     $('#header').addClass('fixed');
    // } else {
    //     // код для прокрутки вверх
    //     $('#header').removeClass('fixed');
    // }
    //     lastScrollTop = st;
    // });

    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset 
        }, 500);
    })


    /* menu nav toggle бургер меню */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active")
    });


    /* collapse аккардион */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(blockId).slideToggle();
        $this.toggleClass("active");
    });


    /* slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});