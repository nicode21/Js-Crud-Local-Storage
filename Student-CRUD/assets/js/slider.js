$(function () {
  let icons = $(".body .slider-box i");
  let imgs = $(".body .slider-box .slider img");
  let tabs = $(".body .show .tabs .tab");
  let show = $(".body .show .tabs");
  let translate = 0;
  let count = 0;

  $(icons[0]).on("click", function () {
    let active = $(".active");
    let tabA = $(".active-tab");


    if (active.prev()[0] == null) {
      active.removeClass("active");
      active.parent().children().last().addClass("active");
      tabA.removeClass("active-tab");
      tabA.parent().children().last().addClass("active-tab");
    } else {
      active.removeClass("active");
      active.prev().addClass("active");
      tabA.removeClass("active-tab");
      tabA.prev().addClass("active-tab");
    }
  })


  $(icons[1]).on("click", function () {
    let active = $(".active");
    let tabA = $(".active-tab");


    if (active.next()[0] == null) {
      active.removeClass("active");
      active.parent().children().eq(0).addClass("active");
      tabA.removeClass("active-tab");


      tabA.parent().children().first().addClass("active-tab");
    } else {
      active.removeClass("active");
      active.next().addClass("active");
      tabA.removeClass("active-tab");
      tabA.next().addClass("active-tab");

    }
  })


  for (const t of tabs) {

    $(t).on("click", function () {
      let active = $(".active");
      let tabA = $(".active-tab");

      console.log(tabA);

      for (const img of imgs) {

        if ($(this).attr("data-id") == $(img).attr("data-id")) {
          tabA.removeClass("active-tab");
          active.removeClass("active");
          $(img).addClass("active");
          $(this).addClass("active-tab");
        } else {
        }
      }

    });

  }


  let body = $("body");

  body.on("keyup", function (e) {
    if (e.keyCode == "37") {
      icons[0].click();
    }

    if (e.keyCode == "39") {
      icons[1].click();
    }

    if (e.keyCode == "40") {
      show.css("opacity", "0");
    }

    if (e.keyCode == "38") {
      show.css("opacity", "1");
    }

    // console.log(icons[1].click());
    // console.log(e.keyCode);

  })
})