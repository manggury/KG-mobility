$(function () {
    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.visual_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true,
    })

    $('.mainVisual .arrows .left').on('click', function () {
        $('.visual_slide').slick('slickPrev');
    })
    $('.mainVisual .arrows .right').on('click', function () {
        $('.visual_slide').slick('slickNext');
    });

    $('.maincar_slide').slick({
        slidesToShow: 6,
        arrows: false,
    });

    $('.mainCar .arrows .left').on('click', function () {
        $('.maincar_slide').slick('slickPrev');
    })
    $('.mainCar .arrows .right').on('click', function () {
        $('.maincar_slide').slick('slickNext');
    });

    $('.event_img_box').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: true,
    })
    $('.mainEvet .arrows .left').on('click', function () {
        $('.event_img_box').slick('slickPrev');
    })
    $('.mainEvet .arrows .right').on('click', function () {
        $('.event_img_box').slick('slickNext');
    });

    // $('.social_tab li a.youtube').on('click', function (e) {
    //     e.preventDefault();
    //     const idx = $(this).parent().index();
    //     console.log(idx);
    //     $('.tab_menu .youtube_menu').removeClass('on');
    //     $('.tab_menu .youtube_menu').eq(idx).addClass('on');

    //     $('.tab_menu').hide();
    // })

    $('.social_tab li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();
        console.log(idx);
        $('.tab_menu .content').removeClass('on');
        $('.tab_menu .content').eq(idx).addClass('on');

        //$('.tab_menu').hide();
    });

    $('.FB_iframe').slick({
        slidesToShow: 1,
        arrows: false,
    })

    $('.facebook_menu .arrows .left').on('click', function () {
        $('.FB_iframe').slick('slickPrev');
    })
    $('.facebook_menu .arrows .right').on('click', function () {
        $('.FB_iframe').slick('slickNext');
    });
});