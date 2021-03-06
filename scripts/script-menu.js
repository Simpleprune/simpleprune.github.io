var main = function(){
  $('.card').hover(function(){
   $(this).animate({top:"90px"}, 200 );
    $(this).addClass('card-preview');
    
  },
  function(){$(this).removeClass('card-preview');
   $(this).animate({top:"100px"}, 200 );
  }
  );

 
  //Bounce du menu
  $('#prez').hover(function(){
    $(this).effect( "bounce", {times:3}, 1000 );
  });
  //Ouverture menu
   $('.icon-menu').click(function() {
    $('.menu-bg').animate({left: "0px"}, 200);
    $('#main').animate({left: "285px"}, 200);
  });
  
   /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu-bg').animate({left: "-285px"}, 200);

    $('body').animate({left: "0px"}, 200);
  });

  // Couleurs aléatoires des lettres

  $('.hb').each(function(){
  var colors = ['#cad4e0', '#70c194', '#f9be06', '#f49df4'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
   $(this).css('color', random_color); 
  });
  
  //Bounce du Joyeux anniversaire
  $('.hb').each(function(){
  $(this).hover(function(){
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
   //A réactiver pour mettre en place le changement d'ordre
   // $('#cards').prepend($(this));
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
  
  //Quand on clique sur la croix d'une carte on la ferme
  $('.icon-close.view').click(function(){
    var currentCard = $('.selected');
    currentCard.children('.view').hide();
    currentCard.removeClass('selected');
  })
  
  //On peut aussi fermer une carte avec Echap
  $(document).keyup(function(e) {
    if (e.keyCode === 27)
      var currentCard = $('.selected');
    currentCard.children('.view').hide();
    currentCard.removeClass('selected');
    
    });
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
  
  //Slider
  
   $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
  
  //Fin slider
  
  $('.btn').addClass('disabled')

};

$(document).ready(main);
