$(document).ready(function () {

    // brand slider
    var swiper = new Swiper(".brandsslider", {
        spaceBetween: 30,
        loop: true,
        slidesPerView: "auto",
        speed: 4000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });


    var swiper2 = new Swiper(".adapslider.sl2", {
        slidesPerView: 3,
        spaceBetween: 64,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            360: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 64,
            },
        },
    });

    var swiper3 = new Swiper(".adapslider.sl3", {
        slidesPerView: 3,
        spaceBetween: 24,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            360: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });

    var swiper4 = new Swiper(".adapslider.sl4", {
        slidesPerView: 3,
        spaceBetween: 24,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            360: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });


    // mob menu

    $('.burgermenu').click(function () {
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('show');
        $('body').toggleClass('hidden');
        window.scrollTo(0, 0);
    });

    // header
    const $header = $("header.header")
    let prevScroll
    let lastShowPos

    $(window).on("scroll", function () {
        const scrolled = $(window).scrollTop()

        if (scrolled > 100 && scrolled > prevScroll) {
            $header.addClass("header-out")
            lastShowPos = scrolled
        } else if (scrolled <= Math.max(lastShowPos - 250, 0)) {
            $header.removeClass("header-out")
        }
        prevScroll = scrolled
    })



});