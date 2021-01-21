$(document).ready(function(){
    let fadeTime = 800;
    let esc = 27;

    $('.form-open').click(function(){
        $('.popup-container').fadeIn(fadeTime);
        $('html,body').css('overflow','hidden');
    });

    $('.popup-container').click(function(e){
        if(e.target == this){
          $(this).fadeOut(fadeTime);
          $('html,body').css('overflow','visible');
        }
    });

    $(this).keydown(function(e){
        if (e.which == esc) {
            $('.popup-container').fadeOut(fadeTime);
            $('html,body').css('overflow','visible');
        }
    });

    $('.close').click(function(e){
        e.preventDefault();
        $('.popup-container').fadeOut(fadeTime);
        $('html,body').css('overflow','visible');
    });
    $('input[type="tel"]').inputmask({'mask': '8 (999) 999-9999'}); 
});