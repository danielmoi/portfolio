$('[data-section="select"]').addClass('nav__active');

$('.btn--select2').on('click', function() {
  $('.select2-value').text($('select[name="select2"]').val());
});
