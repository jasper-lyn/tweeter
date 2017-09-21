$(document).ready(function() {

  $('textarea').on('keyup', function(event) {
    var charset = (140 - event.target.value.length);
    $(event.target).parent().children('.counter').text(charset);
  })
})
