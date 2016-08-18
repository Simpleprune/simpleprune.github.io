var main = function(){
  $('.card').hover(function(){
   $(this).animate({top:"-10px"}, 200 );
    $(this).addClass('card-preview');
    
  },
  function(){$(this).removeClass('card-preview');
   $(this).animate({top:"0px"}, 200 );
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
  var colors = ['#ff0000', '#00ff00', '#0000ff'];
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
  
  
  $('.btn').addClass('disabled')


//Animation de la timeline


	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

};
$(document).ready(main);
