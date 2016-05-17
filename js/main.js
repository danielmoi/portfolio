var currentSection = '';

var arrProjects = [{
  name: 'Musical Monsters',
  img: 'img/musical-monsters.png',
  desc: 'My final project for General Assembly Web Development Immersive'
}, {
  name: 'Sorter',
  img: 'img/sorter.jpg',
  desc: ''
}, {
  name: 'Nadine Claire Events',
  img: 'img/nadine-claire-events',
  desc: ''
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

$title = $('.project__title');
$description = $('.project__description');
$img = $('.project__image');

var populateProject = function(index) {
  $title.text(arrProjects[index].name);

};

var currentProject = 0;

// RIGHT CLICK
$('.project__overlay--right').on('vclick', function() {
  currentProject += 1;
  if (currentProject === arrProjects.length) {
    currentProject = 0;
  }
  populateProject(currentProject);
});

// LEFT CLICK
$('.project__overlay--left').on('vclick', function() {
  currentProject -= 1;
  if (currentProject < 0) {
    currentProject = arrProjects.length - 1;
  }
  populateProject(currentProject);
});
