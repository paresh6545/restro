$(document).ready(function(){
 $('a.page-scroll').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $(target);

     $('html, body').stop().animate({
         'scrollTop': $target.offset().top
     }, 900, 'swing', function () {
         window.location.hash = target;
     });
 });

});

$(document).ready(function(){
    $('.scroll-down').click(function(){
        $('html,body').animate({scrollTop: $(document).height()},9000);
        return false;
    });
});

//--scroll to top animation--
$(document).on('click','#scrollToTop',function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
});


