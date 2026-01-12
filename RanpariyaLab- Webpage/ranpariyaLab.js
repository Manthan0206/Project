$(document).ready(function(){
    const header = $("#header");
    function headerscroll() {
        if ($(window).scrollTop() >= 1) {
            header.addClass("fixed-top");
        }else{
            header.removeClass("fixed-top")
        }
    }
    $(window).on("scroll", headerscroll);
    headerscroll();

    $('.display').each(function (index) {
        $(this).on('click', function () {
            const $span = $('.span').eq(index);
            if ($span.length) {
                $span.toggleClass('d-none');
                if ($span.hasClass('d-none')) {
                    $(this).text('See more');
                } else {
                    $(this).text('See less');
                }
            }
        });
    });


    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        slideTransition: 'linear',
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            }
        }
    });
});
