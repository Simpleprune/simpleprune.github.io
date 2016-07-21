var main = function(){
   $('#gateau').click(function(){
    $(this).fadeOut();
    $('#ja').slideDown('slow');
  });
    $(.buttn-ys).hover(
    function(){
    $(this).addClass('buttn-ys-highlight');
    },
    function(){
    $(this).removeClass('buttn-ys-highlight')    
    }
  );
  };
  



  
  $(document).ready(main);
