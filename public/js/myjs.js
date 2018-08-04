//stopping slider
$(function(){
    $('.carousel').carousel({
        interval: 1000
    });

    $('.search').on('click', function(){
        $('.main-menu .nav.navbar-nav.navbar-right').slideToggle();
    })
});

