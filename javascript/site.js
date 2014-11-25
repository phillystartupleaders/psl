$(document).ready(function(){
  $(".mobile-menu").click(function() {
    $(".navigation-list").slideToggle();

    $(".navigation-list > li").click(function(){
      $(".navigation-list").slideHide();
    });
  });
});

