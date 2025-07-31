$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle_btn").on("click", function () {
    $("#header").toggleClass("open"); 
  });


  $(".mask").on("click", function () {
    $("#header").removeClass("open");
  });

  $("#nav a").on("click", function () {
    $("#header").removeClass("open");
  });

  $("#nav").on("click", function () {
    $("#header").removeClass("open");
  });

});