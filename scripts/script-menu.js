var main = function(){
  $('.card').hover(function(){
    $(this).addClass('card-preview');
  },
  function(){$(this).removeClass('card-preview');}
  );
  $('.card').click(function(){
    $(this).toggleClass('selected');
    $('.main').prepend($(.'selected'));
  });
};

$(document).ready(main);
