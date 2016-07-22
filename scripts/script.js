var main = function(){
   $('#gateau').click(function(){
    $(this).hide("bounce", { times: 3 }, "slow");
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
    $('#conteneur-init').fadeOut('slow');
    $('#conteneur-init').promise().done(function(){
    window.location.href="http://estellelagrossenaze.com/menu";
    });
    });
};
  



  
  $(document).ready(main);
