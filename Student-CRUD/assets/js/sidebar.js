$(function () {
  let rightOpen = $(".all-body .body .right-part .right-bar i");


  let rightClose = $(".all-body .body .right-part .bar-body i");

  let barBody = $(".all-body .body .right-part .bar-body");


  rightOpen.on("click", function () {
    $(this).css("display", "none");
    rightClose.css("display", "block");
    barBody.css("transform", "translateX(0%)");
  })


  rightClose.on("click", function () {
    rightOpen.css("display", "block");
    barBody.css("transform", "translateX(100%)");
  })


  let bottomOpenClose = $(".all-body .bottom-part .bottom-bar .icon i");


  let bottomBar = $(".all-body .bottom-part .bottom-bar");

  let translate = "";

  bottomOpenClose.on("click", function () {
    if (translate == "-110px") {
      bottomBar.css("transform", "translateY(-40px)");
      translate = "-40px";
    } else {
      bottomBar.css("transform", "translateY(-110px)");
      translate = "-110px";
    }
  })
})