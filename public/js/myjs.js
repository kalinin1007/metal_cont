//stopping slider
$(function(){
    $('.carousel').carousel({
        interval: 3000
    });

    $('.search').on('click', function(){
        $('.main-menu .nav.navbar-nav.navbar-right').slideToggle();
    })
});

// --------------  ajax callback  --------------------

function ajaxCall(){
    $('.mod-content').html('<h2>Наш менеджер свяжится с Вами!!!</h2>');
}

//------------------- form ajax -----------------------------

function ajaxForm(){
    $('#form').html('<h2>OK!!!</h2>');
}

//------------------ modal -------------------------
// open modal
var wrap = $('#wrapper'),
     btn = $('.open-modal-btn, #call_back'),
     modal = $('.cover, .modal, .mod-content');

btn.on('click', function() {
  modal.fadeIn();
});

// close modal
$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.mod-content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
    wrap.unbind('click');
  });
});
