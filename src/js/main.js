$(document).ready(function () {
    $("#home-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    var certSlider = $('#certificates-slider')
    certSlider.owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
    })
    $('.custom-next_cert').click(function () {
        certSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.custom-prev_cert').click(function () {
        certSlider.trigger('prev.owl.carousel', [300]);
    });
    //Табы на странице
    $('ul.products-tabs__caption').on('click', 'li:not(.products-tabs__btn_active)', function () {
        $(this)
            .addClass('products-tabs__btn_active').siblings().toggleClass('products-tabs__btn_active')
            .closest('div.products-tabs').find('div.products-tabs__content').toggleClass('products-tabs__content_active').eq($(this).index()).toggleClass('products-tabs__content_active');
    });
    //Burger
    $('.burger-menu').click(function(){
        $('.burger-menu').toggleClass('burger-menu_active')
        $('.nav__list').toggleClass('nav__list_active')
    });

    var prodSlider = $('.products-slider')
    prodSlider.owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
        dots: false,
    })
    $('.custom-next_prod').click(function () {
        prodSlider.trigger('next.owl.carousel');
    })
    
    $('.custom-prev_prod').click(function () {
        prodSlider.trigger('prev.owl.carousel', [300]);
    });
});
