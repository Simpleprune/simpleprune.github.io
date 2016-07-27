var main = function(){
  $('.card').hover(function(){
    $(this).toggleClass('card-preview');
  });
};

$(document).ready(main);
