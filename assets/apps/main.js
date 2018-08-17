function Controller() {

  $("#button").click(function () {
    $('html, body').animate({
      scrollTop: $("#myDiv").offset().top
    }, 2000);
  });

  this.scrollPage = function scrollAbout(div, move) {
    $('html, body').animate({
      scrollTop: $("#"+div).offset().top/move
    }, 2000);
  }
}