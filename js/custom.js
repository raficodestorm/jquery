alert('are you happy?');

$(document).ready(function(){
    $('.butt').click(function(){
        $('.ami').hide(2000);
    });

    $('.but').click(function(){
        $('.tomi').hide(2000);
        $('.tomi').show(2000);
    });

    $('.buto').click(function(){
        $('.she').toggle(2000);
    });
});