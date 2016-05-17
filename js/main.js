$('.nav__list-item').on('vclick', function(e) {
  // console.log($(this));
  // console.log($(this).children()[0].attr('data-section'));
  // console.log($(this).children()[0]);
  var section = $($(this).children()[0]).attr('data-section');
  $('.main__container').fadeOut(200).delay(200);
  console.log(section);
  $('#' + section).fadeIn(300);
});
