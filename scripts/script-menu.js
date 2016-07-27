var main = function(){
  $('.card').hover(function(){
    $(this).addClass('card-preview');
  },
  function(){$(this).addClass('card-preview');}
  );
  $('.card').click(function(){
    $(this).toggleClass('selected');
    $(this).children('preview').fadeOut();
  });
};

$(document).ready(main);
