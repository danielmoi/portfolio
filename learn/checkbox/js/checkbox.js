// $('[data-section="select"]').addClass('nav__active');

$('.btn--cb4').on('click', function() {
  var arrCB = [];

  // using $.map will make arrCB a jQuery object
  // arrCB = $('input[name="cb4"]:checked').map(function(el) {
  //   return $(this).val();
  // });

  $('input[name="cb4"]:checked').each(function(index, el) {
    arrCB.push(el.value);
  });

  $('.cb4-value').text(arrCB.join(', '));

  console.log(arrCB);
});
