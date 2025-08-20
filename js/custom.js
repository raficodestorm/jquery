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

// -----------------------------class 2-------------------------

$('.remove').css("background-color","green");
$('.re').addClass("remo");

$(document).ready(function(){
    $('.ch').click(function(){
        $('.r').text("Hello!");
    });

})

// -----------------------------class 3-------------------------
$(document).ready(function(){
    $(document).keydown(function(){
      $('body').css('background-color', 'black');
    });
    $(document).keyup(function(){
      $('body').css('background-color', 'white');
    });
  });