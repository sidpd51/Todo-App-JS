var isNavOpen = true;

function toggleNav() {
  // if (isNavOpen) {
  //   closeNav();
  // } else {
  //   openNav();
  // }
  // isNavOpen = !isNavOpen;

  $("#mySidenav").toggleClass("content--isHidden");
  $("#main").toggleClass("content--isHidden");
}

function openNav() {
    var screenWidth = $(window).width();
    if (screenWidth >= 576 && screenWidth <= 768) {
      $("#mySidenav").css("width", "180px");
      $("#main").css("margin-left", "180px");
    } else {
      $("#mySidenav").css("width", "320px");
      $("#main").css("margin-left", "320px");
    }
    // $("#mySidenav a").css("display", "block");
  }

function closeNav() {
  // $("#mySidenav a").css("display", "none");
  $("#mySidenav").css("width", "0");
  $("#main").css("margin-left", "0");
}

$(document).ready(function() {
    $('.navbar-collapse').on('shown.bs.collapse', function () {
        $('#main').css({
            'margin-top': '360px',
            'transition': 'margin-top 0.5s ease'
        });
    });

    $('.navbar-collapse').on('hidden.bs.collapse', function () {
        $('#main').css({
            'margin-top': '80px',
            'transition': 'margin-top 0.5s ease'
        });
    });
});