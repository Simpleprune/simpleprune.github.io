var main = function(){
   $('#gateau').click(function(){
    $(this).fadeOut();
    $('#ja').slideDown('slow');
  });
    $('.buttn-ys').hover(function(){
    $(this).addClass('buttn-ys-highlight');
    },
    function(){
    $(this).removeClass('buttn-ys-highlight')    
    }
  );
  $('.buttn-ys').click(function(){
    $('#conteneur-init').fadeOut();
    window.location.replace("http://estellelagrossenaze.com/menu");
    });
};
  



  
  $(document).ready(main);
