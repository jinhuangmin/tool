$(document).ready(function(){
  $('#navlist').on('click', 'li', function(e){
        $('#navlist li').removeClass('active');
        $(this).addClass('active');
        console.log("123");
    });
});