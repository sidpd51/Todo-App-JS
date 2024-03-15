$(document).ready(function() {
  $('.navbar-collapse').on('shown.bs.collapse', function () {
      $('#main').css({
          'margin-top': '360px',
          'transition': 'margin-top 1s ease'
      });
  });

  $('.navbar-collapse').on('hidden.bs.collapse', function () {
      $('#main').css({
          'margin-top': '80px',
          'transition': 'margin-top 1s ease'
      });
  });
});