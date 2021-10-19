$(index.html).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $("#header").css({ "background-color": "transparent" });
    } else {
      $("#header").css({ "background-color": "#3a4e59" });
    }
  });
});
