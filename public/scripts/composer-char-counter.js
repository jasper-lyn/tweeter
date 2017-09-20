$(document).ready(function() {
  $('textarea').on('keyup', function(event) {
    console.log(140 - event.target.value.length);
  })
})
