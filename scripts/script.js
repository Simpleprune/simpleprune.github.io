var main = function(){
   $('#gateau').click(function(){
      $(this).animate("bounce");
   // $(this).fadeOut();//
  });
    $('.buttn-ys').hover(function(){
    $(this).addClass('buttn-ys-highlight');
    },
    function(){
    $(this).removeClass('buttn-ys-highlight')    
    }
  );
  $('.buttn-ys').click(function(){
    $('#conteneur-init').fadeOut('slow');
    $('#conteneur-init').promise().done(function(){
    window.location.href="http://estellelagrossenaze.com/menu";
    });
    });
};
  



  
  $(document).ready(main);
