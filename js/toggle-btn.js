$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle_btn").on("click", function () {
    $("#header").toggleClass("open");
  });

  $("#navi a").on("click", function () {
    $("#header").toggleClass("open");
  });

  $("#navi").on("click", function () {
    $("#header").removeClass("open");
  });
});
