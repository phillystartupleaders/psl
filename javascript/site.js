$(document).ready(function(){

  $(".mobile-menu").click(function() {
    $(".navigation-list").slideToggle();

    $(".navigation-list > li").click(function(){
      $(".navigation-list").slideHide();
    });
  });

  $(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $(".hero").css({"top": .7*scrollVar });
    $(".hero").css({"opacity":( 500-scrollVar  )/500});
  });
});

