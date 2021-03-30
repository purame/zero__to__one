jQuery(function() {
    //page-top-fade
    $(window).scroll(function(){
        var now = $(window).scrollTop()
        if(now > 1000) {
            $('.pagetop').fadeIn('slow')
        } else {
            $('.pagetop').fadeOut('500')
        }
    })

    //page-top-click
    $('.pagetop').click(function(){
        $('body,html').animate({
            scrollTop: 0}, 700
            )
    })

    //Hamberger-menu
    $(`.menu__btn`).on('click', function(){
        $('.menu').toggleClass('is-active');
        $('#line1').toggleClass('active__top');
        $('#line2').toggleClass('active__mid');
        $('#line3').toggleClass('active__btm');
    })

    $('.menu__item').on('click', function(){
        $('.menu').toggleClass('is-active');
        $('#line1').toggleClass('active__top');
        $('#line2').toggleClass('active__mid');
        $('#line3').toggleClass('active__btm');
    })

})
