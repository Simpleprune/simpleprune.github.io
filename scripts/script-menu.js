var main = function(){
  $('.card').hover(function(){
    $(this).addClass('card-preview');
  },
  function(){$(this).removeClass('card-preview');}
  );
  
  //Bounce du menu
  $('#prez').hover(function(){
    $(this).effect( "bounce", {times:3}, 1000 );
  });
  // Couleurs aléatoires des lettres

  $('.hb').each(function(){
  var colors = ['#ff0000', '#00ff00', '#0000ff'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
   $(this).css('color', random_color); 
  });
  
  //Bounce du Joyeux anniversaire
  $('#menu-btn').hover(function(){
  $(this).children().each(function(){
    $(this).effect( "bounce", {times:3}, 1000 );
  });
  });
  
  //Lecture des cartes
  
  $('.card').click(function(event){
    event.stopPropagation();
  });
  
  $('.card').click(function(){
    var currentCard = $('.selected');
    currentCard.children('.view').hide();
    currentCard.removeClass('selected');
    $(this).addClass('selected');
    $('#cards').prepend($(this));
    $(this).children('.view').show();
  });
  
  //Quand on clique dans le div '.view', on ne ferme pas la fenêtre
  
  $('.view').click(function(event){
    event.stopPropagation();
  });
  //Quand on clique hors d'une carte, on la ferme
  $('body').click(function(){
    var currentCard = $('.selected');
    currentCard.children('.view').hide();
    currentCard.removeClass('selected');
  })
  
  //Début de la partie formulaire
  
   $('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled'); 
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('#Post').hover(function(){
    $(this).addClass('highlight');
    },
    function(){
    $(this).removeClass('highlight');   
    }
    );
  //Fin de la partie formulaire
  
  
  $('.btn').addClass('disabled')
};

$(document).ready(main);
