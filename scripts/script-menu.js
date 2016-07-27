var main = function(){
  $('.card').hover(function(){
    $(this).addClass('card-preview');
  },
  function(){$(this).addClass('card-preview');}
  );
};

$(document).ready(main);
