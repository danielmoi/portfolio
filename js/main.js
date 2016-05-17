var currentSection = '';

var arrProjects = [{
  name: 'Musical Monsters',
  img: 'img/musical-monsters.png'
}, {
  name: 'Sorter',
  img: 'img/sorter.jpg'
}, {
  name: 'Nadine Claire Events',
  img: 'img/nadine-claire-events'
}];

$('.nav__list-item').on('vclick', function(e) {
  var section = $($(this).children()[0]).attr('data-section');
  currentSection = section;
  $('.main__container').fadeOut(200).delay(200);
  console.log(section);
  $('#' + section).fadeIn(300);
});

$('header').on('swipeleft', function() {
  console.log('hello');
});

$('.nav__toggle').on('vclick', function(e) {
  $('.nav').toggle();
});

$('.nav__list-item').on('vclick', function(e) {
  $('.nav').toggle();
});

$('.project__container').on('vclick', function(e) {
  console.log($('.project__image').attr('src', arrImages[1]));
});
